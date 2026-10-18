# 1. Every app you expect to build, and who it’s for

Here's a list of apps to be shipped to players:
1. The game client
2. The game server
3. The mobile APK wrapper
4. A game wiki. Players can submit interactions (like giving a gift to an NPC and whether or not they liked it) to the game wiki.

Here's a list of dev tools to be made. It is nonexhaustive as we might need more later on.
1. Mapmaker - for editing overworld map chunks and connections between them
2. Propmaker - for defining map props that can be placed on map chunks through Mapmaker or the Game Client's Mapplanner available to Govt Officials
3. Worldmap Editor - for editing the no-grid World Map that players can view in the client to see an overview of all towns, cities, forests, and the connections between them.
4. Body Plan Explorer
5. Name Brainstorm

# 2. What code is shared between the apps?

Clarification: the game itself isn't playable online. But the dev tools will be available offline when possible.

- There will be some code similiarities between some dev tools and the game.
	- For the Exploration system:
		- One example is the basic mapchunk-canvas functionalities: loading game assets to be rendered on canvas, drawing filters to simulate ingame daytime or nighttime, collision logic & bounding boxes, panning a game camera to see different parts of the map chunk, mouse key touch listeners to register if a Prop was clicked. These are all shared between the devtool Mapmaker, the ingame Mapplanner available only to ingame Govt Officials, and the Exploration interface itself available to all players.
		- Another example is the more authoritative interface: adding, upgrading, moving, or deleting a Prop — this is shared between the Mapmaker and the Map, but not the Exploration interface.

The ECS core is shared between client and server.

# 3. How game data flows

We still need help visualizing this.

# 4. Assets

We will have sprites, tilesets. Possibly character facial expression art to be displayed in dialogue, story-of-seasons style. No map images are pre-saved; they are all generated dynamically based on the map chunk data indicating what props are where. No audio. We will have some GIFs and images that will be rendered on interfaces outside the Game Canvases, mostly Pokemon GIFs, and images of ingame Items.

# 5. Team and workflow
Team is composed of two lead programmers, and one with an assistive role. The three of us are the owners and expect full access to the whole repo, though we will be assigned different parts of the project and so we plan to study git branches and how they might help with that. We might welcome an artist to the team in the future, but ideally they won't have access to the programming-related files.

# 6. Tooling and deployment
- Idk the difference between npm and pnpm.
- We will use Vite.
- Idk what Turborepo or Nx are.
- We don't know where the server and client will be hosted yet. Some suggestions would be nice.
- We don't know the best way to build the APK yet. You suggested Capacitor in the past, but if you have new suggestions because of new context or memory, then feel free.

# 7. What feels wrong right now
