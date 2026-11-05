# Index
%% Landmark
%%
# Objectives
%% What the team is trying to achieve by building this system. %%
# Overview
%% A summary of how the system should behave once built. %%
A center for every governable town/city, the gym allows players to issue challenges for badges or for the right to participate in governance.
# Behavior, Interface, Mechanics
%%  How the system works, in technical language, as specific as possible. %%
## Badge Challenge
A Badge Challenge is a kind of challenge a Player can issue to a Gym Leader, with the reward being a Gym Badge. In this kind of challenge, there are no restrictions on the Pokemon you can use.

Like in the games, the eight badges in the region are needed to challenge the Elite Four and the Champion.
## Authority Challenge
An Authority Challenge is a kind of challenge a Player can issue to either a Gym Leader or a Gym Minion, with the reward being an upgrade to your `Local Authority` so that it matches that of the Leader/Minion you just beat. In this kind of challenge, you are restricted to using Pokemon that match the typing of the gym, and the maximum Pokemon-level matching the `Local Authority` you are vying for.

- Alternatively, maybe we can loosen the typing restriction to just `n` Pokemon that match the typing, but only those `n` Pokemon will be used as their team when another player challenges them.

A player may only challenge a Gym Minion of tier `N` if they have won a challenge against a Gym Minion of a tier directly below it (if any) in the recent past (timespan unspecified).
## Gym Proxies
Gym Proxies are the original default NPCs challenged by the players. They make decisions when a player governing official cannot make it in time.

# Balance
%% Progression calculations, level scaling, probabilities. For smaller systems, a table is enough. %%
# Analytics
%% Data to track. %%
# References
%% References needed to understand the system. %%



%% Optional Sections
# Art
# Audio

