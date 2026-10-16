Help me conceptualize how maps look like programming-wise in our game. I want maps similar to Pokemon Emerald or Pokemon Platinum, so it's a grid-based map. A few objectives I need to satisfy:

1. A map is an `w x h` grid, and for the purposes of exploration, it has subareas. Each subarea has a number of `holoflags`. You must reach and interact with all `holoflags` in a certain area through Explorer Mode in order to turn that subarea's ground into `spawnable ground`. 
2. There are two modes of exploration:
    1. Surveyor Mode - you can scroll to pan the camera around and interact with map-entities by clicking on them. you can click on `spawnable ground` to spawn your character there and switch to Explorer mode.
    2. Explorer Mode - you physically control a character and its sprite moves on the map. you can sill interact with map-entities by clicking, but you can also move towards certain `holoflags`​ to unlock more spawnable ground.
3. Players who are part of the government will be able to access a map editor interface, in which they can:
	1. create, move, style, upgrade, or demolish buildings
	2. add, move, style, upgrade or remove furnishings like benches, potted trees, or lampposts.
	3. add ground tiles like paved road
	- But it only creates a plan file. Then they're submit their plan to the government for the rest of the government to vote upon.
4. 

So I'm planning to make a `MapEditor` tool that allows me to create maps (or edit existing ones), but since most of the functionality kinda carries over to the map planning interface of the Government, I want to kill two birds with one stone here.

I will have access to extra functionalities like putting down `holoflags` and my interface will have access to buildings that they don't have access to, like Gyms for instance (in which there must be a maximum of 1 per town). I will also be able to add ground tiles that they can't, like Foundation or Soft Ground. This matters so I can roughly design the planning experience. For example, Government officials can only put buildings on Foundation. 

I'm trying to conceptualize a `MapEntityEditor` tool that lets me define map-entities with an intuitive UI. But first, I need to describe the maps. Maps are grids with each cell being 16px \* 16px. I want a perspective similar to Pokemon plati

It'll let me:
1. define styles for the entity
2. define the width and height of the entity and its base 16x16 
3. define the type of the entity - I'm not entirely sure what types there should be, but I know there are at least two: a ground tile and a block
4. upload a base image for each style of the entity, and
	- optionally, upload images that override it for a certain season
5. define one or more bounding boxes that indicate the ground area occupied by the entity.
6. define what parts might conflict
7. define one or more visual effects, like
	1. `emitted-lights`: an emitted light is a shape (circle or rectangle) that is used to render a visual effect indicating that that part of the entity is emitting light.
	2. `ground-shadow`: a shadow close to the 
	3. `shimmer`: a shimmer is defined by uploading two images of a vonoroi light map. 
8. define areas relative to the entity that are strongly and dimly illuminated by it.
Maps in our game are composed of a grid with a unit of 16px x 16px. I don't know what the best way is to define an entity as animated, especially since entities can have in which a spritesheet will be needed for each style.