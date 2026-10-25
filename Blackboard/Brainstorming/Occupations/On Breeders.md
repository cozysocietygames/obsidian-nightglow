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

For instance, I can break up a `VariantProfile` into 16 1-digit traits, 8 2-digit traits, 4 4-digit traits, 2 8-digit traits, or 1 16-digit trait.

Simple heritability is when an offspring directly inherits their mother's trait or their father's trait, and no recombination occurs.

Complex heritability is when a trait of the mother and a trait of the father is recombined in some way by some manipulation of its digits.

Skitty
`VariantProfileA`: `009922BB44DD66FF`







If we ever need it, a genome fragment. Each character in the string can be used as a seed by a randomizer to make a gene. 




