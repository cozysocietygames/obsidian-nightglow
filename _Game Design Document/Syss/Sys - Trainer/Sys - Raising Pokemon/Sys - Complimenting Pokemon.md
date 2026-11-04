# Index
%% Landmark
%%
# Objectives
%% What the team is trying to achieve by building this system. %%
Design a system that:
- encourages players to engage in each other's profiles socially
- enhances the capabilities of Pokemon beyond canon
- conveys the concept of how loving a Pokemon affects its battle potential
# Overview
%% A summary of how the system should behave once built. %%
# Behavior, Interface, Mechanics
%%  How the system works, in technical language, as specific as possible. %%

We could still implement targeted voting, but we'd need some way of providing grounds for it. For instance: say you "prime" your Pokemon to behave a certain way, you train them to do actions that are cute and cool. (Maybe behaviors always involve two appeal stats.) When a friend visits your profile, they see a prompt that your Pokemon is acting cutely and coolly. They are then forced to choose one of those attributes for their vote.

Alternatively, or even alongside it, we could implement untargeted voting, calling it a generic `compliment` instead. This way, you don't need to differentiate two Pokemon of the same species; a compliment is a compliment no matter what. Then the player themselves can convert compliments into a particular Appeal Stat. More ideas on this somewhere below. If we want to use 




### Converting Compliments


# Balance
%% Progression calculations, level scaling, probabilities. For smaller systems, a table is enough. %%
# Analytics
%% Data to track. %%
# References
%% References needed to understand the system. %%
## Previous Iterations
>[!warning] The Old System
> 
> A player could `vote` for their own Pokemon to be of a certain category: `Intimacy`, `Cool`, `Tough`, `Beauty`, `Smart`, `Cute`, which adds `1` point to the Pokemon's  appeal stat that they chose. There was a daily upper limit how many times they could do this. Independently of that, a player `A` could similarly `vote` for another player `B`'s Pokemon when they view `B`'s profile; voting for others' Pokemon had its own daily upper limit.
> 
> >[!error] The Problem
> > Their choice of how to vote was ungrounded. Their choice of how to vote on their own Pokemon was only informed by how they wanted to build them. When voting for another player's Pokemon, that layer vanishes and the vote has no meaningful grounds at all. Voting for one player's Wurmple virtually looks the exact same as voting for another's Wurmple.
> > 
> > Our top 2 players had their `Voting` disabled so other players couldn't vote for their Pokemon. Possibly due to the randomness of how it would affect the Pokemon's stats.


%% Optional Sections
# Art
# Audio

