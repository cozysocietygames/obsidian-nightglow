# Introduction
### Players
Some thousands can play at a time. (Real-time multiplayer limited to several players at a time.)
## Technical Overview

### Technical Form
2D graphics, with a Top-down Oblique view.
### Language
React/Typescript, NodeJS
### Player's Controls
* Point-and-click (primarily)

---
# Gameplay

## Gameplay elements 
1. Creature Collection + Pet sim
2. Creature vs. Creature Battling
3. Occupation-based RPG Classes
4. Government/Economy Management Sandbox
5. Quests and Commissions
6. Limited RPG Adventure
## Game Progression
* Game is open-world so there are no true "game levels."
* Game progression is soft-coded, player is guided by their Trainer Tier (E-D-C-B-A-S) and Professional Level. Higher tier trainers have an easier time taking on more difficult battles and challenges, Higher-level professionals have more privileges.
## Winning and Losing
* Completing the main storyline is the *individual* win state of the game. It is not a hard win state, as the ending of the game encourages the player to befriend the legendaries that they weren't able to befriend because they were locked out due to the story route they took.
* Reaching "Steady State" is the *collective* win state of the game — ensuring that the government can handle any disasters that come its way while sustaining the needs of their players. 
* Any Emergent Player-defined Goals
## Why is this fun?
* This gameplay is fun because it allows players to engage with the Pokemon World on a much broader scale outside of the Trainer framework provided in the canon games.
* Player choices shape the shared world.

# Design Document

## Systems

### 1. System: Trainer #Essential
1. Subsystem: Trainer Card
	* The Trainer Card displays information about the Trainer such as:
		* their Stars which they gain when they complete certain requirements such as finishing certain parts of the story
		* their Tier (E, D, C, B, A, S) which progresses as their Pokemon's strengths reach certain thresholds  #discuss
		* gym badges
		* pokemon showcase
		* game achievements of their choice
* 
1. Creature Collection #Essential
	* Trainers are able to generate encounters with Wild Pokemon allowing them to battle and capture them. 
2. Adventure #Essential
	1. Quests #Essential
		* Quests are the checkpoints that a player must complete in order to advances the main storyline. Quests are hardcoded by the developers. Keep quests multi-purpose!
3. Exploration #Future 
### 2. Professional #Essential 
1. Breeder #Essential 
2. Criminal #Essential 
3. Doctor #Essential 
4. Educator #Essential 
5. Officer #Essential 
6. Researcher #Essential 
### 3. Government #Essential 
1. 

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
* Politics on the National Level is highly abstracted, and only exists as a means for the developers to impose, via National Mandates, certain laws that must be there across all four regions: e.g. Regulations on bringing Pokemon who are not endemic to a region into that region.
#### Currency


