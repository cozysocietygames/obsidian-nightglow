# Pokemon NightGlow
(legacy name)

---
# Introduction

## Genre
Pokemon-themed browser-based Sandbox MMO, City/Community Builder, Political/Economic Sim 
## Game Overview
* Collect and care for your favorite Pokemon them to help them grow in ways that surpass their canon capabilities, and unleash their full potential in Pokemon battles
* Play as a Breeder, Doctor, Criminal, Educator, Officer, or Researcher as your side gig and provide your services to other players
* Become a Government Official by taking over one of the region's Pokemon Gyms, and co-administrate the growth of one of the four Regions (Kanto, Johto, Hoenn, Sinnoh) alongside fellow Government Officials
* Complete quests and commissions to help the Region grow
* Play through a unique adventure and choose a side in a major conflict: befriend and defend the Legendary Pokemon, or aid the major organization scheming against them.
### Players
Some thousands can play at a time. (Real-time multiplayer limited to several players at a time.)
## Technical Overview

### Technical Form
2D graphics, with a Top-down Oblique view.
### Platform & Devices
Web browsers on PC and Mobile, possibly Mobile App in the future
### Language
React/Typescript, NodeJS

---
# Gameplay

## Gameplay Outline

### Main Storyline Synopsis
In this alternate universe, Kyogre and Groudon wreaked havoc upon the lands and seas. The world must be rebuilt. People will rise to the occasion. Some deem it enough to restore order and find ways to coexist with such disasters. Others think any cost must be paid in order to prevent such a catastrophe from ever happening again.
### Modes
1. Trainer Mode
	 * This is the main mode of play accessible to everyone: you play as a trainer who catches and raises Pokemon.
	 * Complete commissions given by the government to help aid the growth of the region, and complete quests to advance the main storyline.
2. Professional Mode
	* Secondary gameplay heavily depends on an Occupation-themed class of the Player's choice — choose from Breeder, Doctor, Criminal, Educator, Officer, or Researcher.
		* e.g. If you play as a Criminal, most of Secondary Gameplay revolves around stealing other players' Pokemon or resources.
3. Government Mode
	* This mode of gameplay is limited to Government Officials. In this mode, you have a management interface to make decisions that allow you to administrate the region.
	* Draft proposals and vote on proposals drafted by fellow Government Officials to decide:
		* Hard Infrastructure Decisions:
			* placement of new buildings
			* demolition, relocation, and managing upgrades of old buildings
			* management of accessory buildings like power/water
		* Soft Infrastructure Decisions:
			* management of regional laws and programs that:
				* create commissions for citizens to do in Citizen Mode
				* regulate public resources to be used by Citizens
				* create systems of rewards for Citizens

### Game elements 
1. Creature Collection + Pet sim
2. Creature vs. Creature Battling
3. Occupation-based RPG Classes
4. Government/Economy Management Sandbox
5. Quests and Commissions
6. Limited RPG Adventure
### Game Progression
* Game is open-world so there are no true "game levels."
* Game progression is soft-coded, player is guided by their Trainer Tier (E-D-C-B-A-S) and Professional Level. Higher tier trainers have an easier time taking on more difficult battles and challenges, Higher-level professionals have more privileges. 
### Player's Controls
* Point-and-click (primarily)
### Winning and Losing
* Completing the main storyline is the *individual* win state of the game. It is not a hard win state, as the ending of the game encourages the player to befriend the legendaries that they weren't able to befriend because they were locked out due to the story route they took.
* Reaching "Steady State" is the *collective* win state of the game — ensuring that the government can handle any disasters that come its way while sustaining the needs of their players. 
* Any Emergent Player-defined Goals

### Key Features
1. Shared Persistent World that responds to individual and collective choices
2. Player-run Government
3. Occupation-themed Player Classes
### Why is this fun?
* This gameplay is fun because it allows players to engage with the Pokemon World on a much broader scale outside of the Trainer framework provided in the canon games.
* Player choices shape the shared world.

# Design Document

## Design Guidelines

![[Design Guidelines]]

## Game Design Definitions

### Core Concepts
#### Regional Political Structure
The political structure in each region is as follows:
* The Elites
	* A Champion - the topmost government official
	* Elite Four - four government officials who are just under the Champion in terms of power
* The Local Officials
	* Gym Leaders - eight gym leaders who each govern a city or town of their own
	* Assistant Gym Leaders - assistants who can make decisions when the Gym Leaders are unavailable

#### National Political Structure
* Politics on the National Level is highly abstracted, and only exists as a means for the developers There is an unspecified topmost official who isn't discussed much. 