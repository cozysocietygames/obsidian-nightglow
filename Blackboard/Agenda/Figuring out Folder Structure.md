# 1. Every app you expect to build, and who it’s for

Here's a list of apps to be shipped to players:
1. The game client
2. The game server
3. The mobile APK wrapper
4. A game wiki. Players can submit interactions (like giving a gift to an NPC and whether or not they liked it) to the game wiki.

Here's a list of dev tools to be made. It is nonexhaustive as we might need more later on.
1. Mapmaker - for editing overworld map chunks and connections between them
2. Propmaker - for defining map props that can be placed on map chunks through Mapmaker or the Game Client's Map-Planning Interface
3. Worldmap Editor - for editing the no-grid World Map that players can view in the client to see an overview of all towns, cities, forests, and the connections between them.
4. Body Plan Explorer
5. Name Brainstorm

# 2. What code is shared between the apps?

A few clarifications: our game won't have offline play.

The battle engine will only run on the giv