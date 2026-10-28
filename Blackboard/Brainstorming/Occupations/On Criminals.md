
>[!warning] The Old Design of Stealing
>
>Criminals can steal Pokegold or a Pokemon and wait for the 8-hour timer to run out. When the timer begins, the Player is immediately notified that their Pokemon has gone missing. As long as the 8-hour timer hasn't run out, the Players may report it to the Police Station, in which any Officer may click a button to thwart the stealing. The thwarting is immediate, but the Officer must wait out a timer upon doing this.
>
>Civilians may preemptively hire an Officer to keep them 100% safe for a set amount of time. 

# Increasing the Engagement of Criminals

## Marking a Target

> [!example] Suggestion: Stakeout Timer - Marking a Target
> A Criminal can mark several targets at a time, starting an independent timer for each of them. A target can be marked up to three times, each of which increases their Markedness by `1`.
> 
> Marking a target counts as a Malicious Attempt.
> 
> Each time, a Criminal Marks a target, a Stakeout timer is started, and there is a chance of notifying the Target that they feel like they are being watched.
> 
> * Raising a Target's Markedness to (`markedness ∈ 1,2,3`) takes about **`markedness`h** and upon completion, accumulates **`markedness`h** of Stakeout.
> 
> So, if a Target's Markedness was successfully raised to 3, they have accumulated **`1+2+3 = 6`h** of Stakeout. Accumulated Stakeout is specific to each target. 
>> [!example] Calling Off a Mark
>> A Criminal may choose to Call off a Mark at any time. This stops their current Stakeout timer. They lose their current progress, but they do not lose any accumulated Stakeout, nor do they lose their Markedness towards the target.


## Stealing

> [!example] Stealing (Core Mechanic)
> A Criminal can steal from any of their Marked Targets, by assembling a Heist Team out of one or more of their Pokemon. 
> 
> Stealing counts as a Malicious Attempt.
> 
>Once a Criminal chooses to steal from a Player, the Player is removed from their Marked Targets. Any goods stolen from that player is bundled into a Hot Goods bundle. Then there must be a period of time in which the Hot Goods bundle can be recovered.

### Swapping
Swapping is a mechanic that offers an option to target Players with just one Pokemon on their team (i.e. main roster).

To swap a Pokemon, you need to assign one Pokemon on your Heist Team to be a `scapegoat` and be ready to let them go forever in exchange for what you're stealing.

One thing to be cautious about: Criminal Alts might intentionally swap region-specific Pokemon or even starters in exchange for a lousy Pokemon on their main's team. Possible mechanics to disincentivize that:

- Figure out how a Criminal contributes to the Government that is parallel to the Duties of other occupations. Solving this might eliminate the need to police this behavior.
- Add requirements like some combination of the following:
	- the scapegoat must be in the the same kind of Pokeball as the target.
	- the scapegoat must be at the same level as or higher than the target. (no fiction explanation yet)
	- require some additional consumable resource with high production cost to perform the swap (fiction explanation is dependent on the resources)
	- Require a special stakeout lasting 4 or more hours in addition to raising markedness. The special stakeout converts normal `marked (for stealing)` to `marked (for swapping)`.

### Hot Goods

Hot Goods are recently stolen items that are hard to sell or use because they pose a huge risk.

- A Hot Goods Timer that is started once the Criminal steals. 
- To incentivize Criminals to mark their targets, a higher Markedness of the Target must beneficially influence their Hot Goods Timer. 
- To incentivize Criminals to assemble a bigger Heist Team, we should create Augmentations that allow them to influence their Hot Goods Timer.

#### A multi-phase Hot Goods Timer

- A Hot Goods Timer has different phases—Sizzling, Hot, Warm, Cold. Which correspond to the likelihood of the criminal getting caught.
- Sizzling means the Criminal has a 100% chance of getting caught if the crime is reported and an Officer opens the case. Sizzling should have a relatively short duration.
- Hot means the Officer has to put in moderate effort in their Investigation to catch the Criminal. 
- Warm means the Officer has to put in much effort in their Investigatoin to catch the Criminal.
- Cold means that the Criminal has a 0% chance of getting caught now. 

The Hot Goods Timer must be increased by some amount when a player reports a Crime, and also when an Officer first opens an Investigation. 