# Traits
I was considering a system in which Pokemon have Traits that are permanent in nature. A Trait is composed of a Trait Name and at least one Trait Effect. 

We get more flexibility if we treat a Trait as a composition of its Trait Effects.

Say we conceptualize a `Great Lookout`  trait. It does nothing on its own except serve as a label that describes what kind of effects a Player might expect. For a certain version, we could define the trait to have the `Extra Lookout Charge` effect, which grants them an extra [[On Officers#Lookouts|Lookout Charge]]. In a future update, we might redefine the `Great Lookout` trait to have a different effect instead, for example `Prolonged Protection` which grants the player a Protected status for a longer duration when a Lookout Charge is consumed. In this way, we can refine the effects of traits for the sake of rebalancing without having to force-remove the traits from the Pokemon who already have it. Trait effects are the different ways a Trait might manifest.


# Variant Profile
A Pokemon has one or more data fields called `VariantProfile` that can be used to generate unique inheritable things about it. A Variant Profile is represented by a 16-digit hexadecimal.

Skitty
`VariantProfileA`: `0011223344556677`

Wailord
`VariantProfileA`: `8899AABBCCDDEEFF`

A `VariantProfile` has a lot of flexibility in what it can represent, and thus the design of each `VariantProfile` must be documented well.

For instance, I can break up a `VariantProfile` into 16 1-digit variator, 8 2-digit variators, 4 4-digit variators, 2 8-digit variators, or 1 16-digit variator.

## Variators and what they represent

### A Variator as a Boolean for Trait Presence
If a Variator is set as a Boolean for Trait Presence, then that means for some range of its values, a Trait is marked absent, and for the remaining range of values, a Trait is marked present. For example, if you have a 4 digit variator: 
- `0000 - FFEF`: Not Shiny
- `FFF0 - FFFF`: Shiny
### A Variator as a Trait Differentiator
A piecewise function may be defined to assign different kinds of traits to different ranges of values. For a crude example: 
- `0 - 3`: No Trait
- `4 - 7`: Stealthy
- `8 - B`: Great Lookout
- `C - F`: Soothing Presence
Variators as Trait Differentiators are best for Traits that are mutually exclusive.

### A Variator as a Measure of Trait Strength
A Variator may indicate the strength of a certain trait. For instance, a Variator that indicates a Pokemon's height or weight may be used to generate values of varying magnitude around a mean.

For a 2-digit variator:
- `00` : minimum possible value of height/weight.
- `FF` : maximum possible value of height/weight.
This can lead to 256 different variations resulting in a very granular height/weight. If that is overkill, then a 1-digit variator may be used instead. 
You can use the normInv function 

Say we limit the height of a Pokemon to always have a minimum of 80% of its average height and a maximum of 120% of its average height. 



Simple heritability is when an offspring directly inherits their mother's trait or their father's trait, and no recombination occurs.

Complex heritability is when a trait of the mother and a trait of the father is recombined in some way by some manipulation of its digits.

Skitty
`VariantProfileA`: `009922BB44DD66FF`

Breaking up a `VariantProfile` into 1-digit traits means a trait in this case can take on one of 16 values. Breaking it up into 2-digit traits instead means a trait can take on 256 values. Breaking it up into 4-digit traits means a trait can take on 65536 values. This calls into question whether 8-digit traits or 16-digit traits are meaningful. 





If we ever need it, a genome fragment. Each character in the string can be used as a seed by a randomizer to make a gene. 




