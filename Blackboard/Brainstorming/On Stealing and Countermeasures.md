
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
> * Raising a Target's Markedness to (`markedness ∈ 1,2,3`) takes about **`markedness`h** and upon completion, accumulates `markedness`h** of Stakeout.
> 
> So, if a Target's Markedness was successfully raised to 3, they have accumulated **`1+2+3 = 6`h** of Stakeout. Accumulated Stakeout is specific to each target. 
>> [!example] Calling Off a Mark
>> A Criminal may choose to Call off a Mark at any time. This stops their current Stakeout timer. They lose their current progress, but they do not lose any accumulated Stakeout, nor does their target's Markedness.


## Stealing

> [!example] Stealing Timer and Hot Goods Timer (Core Mechanic)
> A Criminal can steal from any of their Marked Targets, by assembling a heist team out of one or more of their Pokemon. 
> 
> Stealing counts as a Malicious Attempt.
> 
>Once a Criminal chooses to steal from a Player, the Player is removed from their Marked Targets. Any goods stole from that player is bundled into a Stolen Goods bundle. A **6m** Stealing Timer is started, although this may be reduced by the proficiency of the Criminal's Pokemon. During this time, if a Player reports the crime and an Officer responds, the Criminal is immediately caught and the Goods are returned. 
>
>If the Stealing Timer finishes completely, the Stolen Goods becomes a Hot Goods, and a Hot Goods timer is started. A Hot Goods Timer starts at **`hotgoods=9?`h** and is reduced by any amount of Accumulated Stakeout.
>
>A Player may still report the crime while the Hot Goods Timer is active. This increases the Hot Goods Timer by 20m, to account for cases like the Player reporting the crime with only 5s left on the Hot Goods Timer.
>
>A Hot Goods timer is started and the player is notified that they have been stolen from. The Stealing timer starts at **8h** by default, and is reduced by the Accumulated Stakeout specific to their target.
>

Hot Goods
# The Officers

## Lookouts

> [!example] Suggestion: Lookouts (Core Mechanic) (Model 1)
> Officers may train Pokemon they own to be Lookouts. A Lookout has a number of Lookout Charges, starting at 1 by default. 
> 
>A player may request an Officer for Lookouts for a duration they may also specify. If the deal is closed, the Officer dispatches the Lookouts for that duration, assigning them to the Player. A Player pays the Officer based on the total number of Lookout Charges and how long they hire them for.
>
>Each Lookout guarding a Player can thwart 1 Malicious Attempt by a Criminal at the immediate cost of 1 of their Lookout Charges, forcing the Player into a Protected status for some duration. While the player is Protected, Malicious Attempts cannot be made on them by any Criminal. Once the Lookout runs out of Lookout Charges, the Lookout becomes unassigned and is immediately sent back to the Officer to be freely dispatched again.
>
>
>>[!warning] The Privacy of Lookouts
>>If Criminals *freely* know how many Lookouts or Lookout Charges are assigned to a player, then there is no element of risk, as they know exactly how many Lookout Charges they (or even their fellow Criminals if they organize with them) must trigger in order for the player to be vulnerable.
>>
>>Without risk, a Player must hire the exact amount of Lookout Charges that would give them the exact guaranteed duration of protection they need. With an element of risk, it becomes more challenging for Criminals to plan, and it allows the Player to pay cheaper prices if they accept the risk.  
>

## Investigation

> [!example] Suggestion: Investigation
> If an Officer attends to a crime report while the Stealing Timer is on, the Criminal is automatically caught. On the other hand, if an Officer attends to a crime report after the Stealing Timer is finished but before the Hot Goods Timer finishes, an Ongoing Investigation is started.
> 
> When an Ongoing Investigation is started, a list of POIs is randomly generated. The Hot Goods Timer is increased by 20m. During the Ongoing Investigation, the Officer must look for Leads.


## The POI List
Some of the POIs generated are NPCs that serve as potential eyewitnesses.  
### Looking for Leads
There are several ways to look for leads. 

1. Letting your Pokemon smell the criminal's scent.
2. "Interviewing" the POIs.




## Emergent Cooperation between Criminals
Since Criminals do not freely know if there are Lookouts guarding a player, a Criminal might