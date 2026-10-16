# NightGlow map system: design decisions (2026-10-16)

Context: Pokémon fangame MMORPG in the browser. React/TS client, map drawn on HTML5 Canvas 2D (not WebGL), Node server, Postgres/Redis. Uses its OWN map editor ("Map-Planning" UI for government officials), NOT Tiled. Maps are dynamic: officials add stairs and buildings, and may terraform (lakes, raising/lowering ground). Target look: Gen 4 Platinum 3/4 view, done in 2D. Platinum itself uses a 2D logic grid + 3D model + BDHC height plates; we fake that look in 2D.

## Projection / art

- World cell is 16×16. Fixed camera: no yaw, no camera movement, no smooth slopes.
- screenX = x·16, screenY = z·D − elev·V, with D=16 and V=12 (the user's choice of look). Elev is in levels.
    - Terrace rim strip = D−V = 4px.
    - Per level, south-facing stairs are 28px long and north-facing stairs are a 4px "sliver". Side stairs rise 12px per 16px across.
- The editor has a top-down view: the same renderer with V=0, so faces vanish. Show height there with tint, contours or a hover readout. Rejected: a camera-pitch slider and sprite band-scaling.
- Art is drawn on a 4px sub-grid.
    - Ground tops are 16×16. The north-rim art sits in the top 4px of a tile.
    - Cliff faces are 16×12 per level: top/mid/bottom bands × left/mid/right ends, plus a single-level piece.
    - Faces line up with the 16px grid only every 4 levels.
- Characters are assumed 16×32. One level = 12px. Building walls ≈ 3 levels (36px).

## Terrain data (the source of truth; everything else is derived)

- Per cell: height (signed levels, Int8; negative for pits and lakes) and material.
- Stored in chunks (~32×32) as bytea in Postgres, each with a version.
- Edits are stored as commands in an edit log (draft → approved → applied). They're validated by a shared TS module that runs on both client and server. After an edit, only the dirty area is re-derived, and the new chunk version is pushed to clients.
- Water is a separate layer: a water level per cell or per water body; water exists where water level > terrain height. Depth decides puddle / surf / dive. OPEN: explicit water levels vs flow simulation (explicit recommended).
- Terrace rule:
    - Going north, height may drop at most 1 level per tile. Also enforced east/west for side cascades.
    - Going south, any drop is allowed.
    - The editor auto-terraces or rejects edits that break it.
    - This produces the inward-cascading north rims seen in Platinum mountains.
- Because V > D/2, north terrace steps 1 tile deep are decorative and unwalkable (the player's feet would be hidden). A walkable terrace needs to be ≥2 tiles deep on the north side. The editor validates this.
- Walkability is per logical cell, never derived from pixels (player footprint = 16×16). Faces never occupy cells. Rejected: the pixel inset/outset edge models.

## Rendering

- Painter's order, rows north → south. Each row: terrain (south face bands, then top), then the props and entities whose base row it is, sorted by x.
- Tops are autotiled from the 8-neighbor mask at the cell's own height (47 variants per material).
- Terrain is cached per row strip, not per whole chunk, because entities are drawn between rows.
- Hidden characters get a silhouette. The editor warns about walkable cells that are fully hidden.
- Bridge decks are drawn in a second pass (see Bridges).

## Movement / stairs

- Entity position = (x, z, elev). Movement between different heights happens only through connectors:
    - Stairs: each step joins cells exactly 1 level apart. Stored as structures or edge flags on the higher cell, with a facing.
    - Ladders: an edge connector that spans several levels, with a climb animation.
- Validation: both ends of a connector are walkable at the correct levels.
- The server re-runs submitted moves with the same TS movement code (overworld movement isn't live-synced).
- ECS: tiles are not entities. A TileMap resource holds the map; entities get a GridPosition{x,z,elev} component.

## Bridges (walk-under is REQUIRED)

- A deck is a second surface on a cell.
    - Bridge structure: {rect, height, axis, pillars[], material}.
    - Derived per chunk: deckHeight Int8 per cell, −128 = none. At most one deck per cell.
- Entering a cell, an entity takes the surface whose height equals its current elevation (like Emerald's bridge elevation / Platinum's closest BDHC plate).
    - The deck can only be entered from its ends. Railings block sideways moves.
    - Pillars block the ground cells they stand on.
- Collision, triggers, encounters and items are keyed by (x, z, elev). Surfing under a bridge works because the ground surface there is water.
- Draw order:
    1. Pass 1: terrain, pillars, entities on the ground.
    2. Pass 2: decks, entities on decks, front railings.
- Validation: deck ends meet surfaces at the deck's height, or stairs; clearance ≥ 3 levels; terraforming under a bridge must keep that clearance.

## Props (trees, signs, etc.)

- PropDef {sprite, anchor, footprint[]} (footprint cells are blocked); PropInstance {defId, x, z}.
- Props are billboards: never scaled, anchored at the foot point (surface top + 12px).
- Drawn in their base (south-most footprint) row, depth-sorted. No base/overlay sprite split is needed.
- Things you walk under or through (arches, gates, overhangs) use the deck / second-surface approach instead.
- The footprint must be flat. Terraforming under a prop is rejected unless the prop is removed first.

## Buildings

- Structure {rect, levels, style, roof: 'flat'|'pitched', roofWalkable, doors[{x, z, warp}]}, stored separately from terrain.
- Per cell, effectiveHeight = max(terrain, buildingTop). Keeping the layer separate means demolishing restores the terrain.
- Rendered by the terrain pipeline:
    - south face = wall bands with door and windows; top = roof art.
    - Generated from the building's dimensions, so officials can resize; an optional decorative sprite on top for landmarks.
- Exempt from the terrace rule (buildings may hide what's behind them).
- Doors: stepping north into the door cell warps to the interior map.
- A flat walkable roof is ordinary ground at that height, reached by a ladder or adjacent terrain of the same height.
- Pitched roofs:
    - Not walkable. Standard style: ridge running east–west. Gable ends facing the camera are unsupported for now.
    - The roof's rise counts toward occlusion.
- Chimneys and dormers are separate parts.

## Storage tables (planned)

- map_chunks(map_id, cx, cy, version, height, material… as bytea)
- map_edits(command jsonb, status)
- structures: bridges, stairs, ladders, buildings, props (jsonb)
- world_objects + player_object_state
- player_location(map, x, z, elev, facing)
- Redis for presence (who is on which map).
- Maps link through a connection table and warps.