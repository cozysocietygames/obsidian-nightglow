# Index
%% Landmark
%%
# Objectives
%% What the team is trying to achieve by building this system. %%
- Provide the player with a convenient interface for accessing new areas, and exploring them.
- Provide the player with ways of encountering new Pokemon.
# Overview
%% A summary of how the system should behave once built. %%
# Behavior, Interface, Mechanics
%%  How the system works, in technical language, as specific as possible. %%
## Maps

## Surveyor Mode
In [[Subsys - Exploration#Surveyor Mode|Surveyor Mode]], you do not control a character. Instead, you control the map camera, and you can pan it to anywhere on the map.

Clicking a Building allows you to interact with it: see its details, or even enter it.

You can see Wild Pokemon roaming about. If you click on one, you can interact with it:
- record it as seen in your Pokedex
- observe it
	- to glean some details about that specific Pokemon
	- to gain Familiarity towards that species
- attempt to capture it without battling
- battle it

Clicking on an empty spot on explored ground allows you to spawn there and switch to [[Subsys - Exploration#Explorer Mode|Explorer Mode]].
## Explorer Mode
In [[Subsys - Exploration#Explorer Mode|Explorer Mode]], you control your player character and you can see them walking on the map.

Your character must be on this mode to unlock new areas. When accessing a map for the first time, it is split into several sub-areas, most of which are unexplored. Unexplored sub-areas do not have any explored ground. Unexplored sub-areas have objective flag that the player must reach to mark that sub-area explored. The ground on explored sub-areas is considered explored ground.

Just like in [[Subsys - Exploration#Surveyor Mode|Surveyor Mode]], you can see Wild Pokemon roaming about. If you click on one, you can interact with it in the same ways. 

Additionally, you might also be prompted of Wild Pokemon hiding in the tall grass. The question is: are you forced to battle them? #discuss/further 
# Balance
%% Progression calculations, level scaling, probabilities. For smaller systems, a table is enough. %%
# Analytics
%% Data to track. %%
# References
%% References needed to understand the system. %%



%% Optional Sections
# Art
# Audio

