# Traits
I was considering a system in which Pokemon have Traits that are permanent in nature. A Trait is composed of a Trait Name and at least one Trait Effect. 

We get more flexibility if we treat a Trait as a composition of its Trait Effects.

Say we conceptualize a `Great Lookout`  trait. It does nothing on its own except serve as a label that describes what kind of effects a Player might expect. For a certain version, we could define the trait to have the `Extra Lookout Charge` effect, which grants them an extra [[On Officers#Lookouts|Lookout Charge]]. In a future update, we might redefine the `Great Lookout` trait to have a different effect instead, for example `Prolonged Protection` which grants the player a Protected status for a longer duration when a Lookout Charge is consumed. In this way, we can refine the effects of traits for the sake of rebalancing without having to force-remove the traits from the Pokemon who already have it. Trait effects are the different ways a Trait might manifest.


# Gene Groups
A Pokemon has one or more fields called `Gene Groups` that identify unique inheritable things about it. Say for example a particular Gene Group labeled A is represented by a 16-letter string, with each character ranging from 0-9A-z. Each Pokemon has two copies of it. 

If a Skitty has Gene Group A represented by the following:
Gene Group A1: `abcdefghijklmnop`
Gene Group A2: `ABCDEFGHIJKLMNOP`

and a Wailord has Gene Group A represented by the following:
Gene Group A1: `qrstuvwxyz012345`
Gene Group A2: `QRSTUVWXYZ678999`

then their offspring might be:


Each character in the string is used as a seed by a randomizer to make a gene. 




C: `aRcDuVgwIYzkl2No9`