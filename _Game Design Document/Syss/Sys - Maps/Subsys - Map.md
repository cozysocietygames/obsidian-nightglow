# Index
%% Landmark
%%
# Objectives
%% What the team is trying to achieve by building this system. %%
- Define the structure of a map.
# Overview
%% A summary of how the system should behave once built. %%
Not to be confused with the World Map, a Map is a representation of a physical location, and can be engaged in through several ways. It may be [[Subsys - Exploration|explored]] or it may be [[modified]].
# Behavior, Interface, Mechanics
%%  How the system works, in technical language, as specific as possible. %%
A Map is a representation of a meaningful location on the `overworld`. 

A Map can hold several `Map Props`. `Map Props` come in various types: 
Blocks which have certain 


For the purposes of exploration, it is divided into `subsections` by a label grid: a 2D array the same size as the map's grid, where each cell holds the ID of the subarea that cell belongs to. For example, a 6x4 grid might be divided into three `subsections` like so:

```
AAABBB
AABBBB
ACCCBB
ACCCCC
```
# Balance
%% Progression calculations, level scaling, probabilities. For smaller systems, a table is enough. %%
# Analytics
%% Data to track. %%
# References
%% References needed to understand the system. %%



%% Optional Sections
# Art
# Audio