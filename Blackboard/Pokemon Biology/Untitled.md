Good call doing a sample first before proceeding with the whole thing. After viewing the file, I have a few edits to request for the schema.

Why isn't `functionTags`​ an optional property again? It seems to be an empty array for a lot of `BodyPartRow`​s. And speaking of that, `detachable`​ and `regenerative`​ are so repetitive and are `false`​ most of the time, so we might as well create an (optional if there is no good reason for it to not be) `propertyTags?: PropertyTag[]`​ property for the `BodyPlanRow`​ , with a `PropertyTag`​ enum that contains `Detachable = 'Detachable'`​ and `Regenerative = 'Regenerative'`​. Making it an array could make it easier to add new properties in the future too.

Also, add a `FunctionTag.LightSource`​ for parts that emit light.

Also, I think apart from `BodyPlan`​ and `Integument`​ a species should also have an optional `Produce` component that indicates a product it can yield, and the conditions for it to yield it, and the regeneration rate before it can yield it again:

1. Moomoo Milk from female Miltank via Milking but only if you give it a berry, high regeneration rate
    
2. Berry Juice from Shuckle via Waiting, but only if you give it a berry, low regeneration rate
    
3. Eggs from female bird-like Pokemon via Waiting, but only if you give it a seed, high regeneration rate
    
4. Slowpoke Tail from Slowpoke via Waiting, low regeneration rate
    
5. Honey from Combee and Vespiquen via Waiting, but only if you give them a flower, high regeneration rate
    
6. Wool from Mareep and Flaaffy and Ampharos via Shearing, mid regeneration rate.
    
7. Nanab Berry from Tropius via Waiting, but only if you give it a flower, mid regeneration rate.
    

And I almost forgot, these species are also going to eventually have a `Learnable Moveset`​ component. But... I don't want you to populate that component yet anytime soon; I'd like us to create the schema for the Moves before we go about doing that.

Is it unadvisable to put in the `SpeciesEntity`​ a property like`learnableMoveset: LearnableMovesetId`​? On a separate page, we'd have a registry of`LearnableMovesetEntity`​ entities. A `LearnableMovesetEntity` ​ would have three components: one that is a list of moves learnable via level up, one is a list of learnable TM Moves, and one is a list of learnable Egg Moves. Or is it better to just have a `learnableMoveset: LearnableMoveset`​ similar to all the other properties of `SpeciesEntity`​ so far, where `LearnableMoveset`​ is an interface that has three properties, one is level-up moves, one is tm-moves, and one is egg moves? The only reason I thought of the first one is so that we could have a working registry right away, and maybe the SpeciesEntity won't look so crowded, but I'm not sure if it's a good idea. Please let me know which of these is better, or if you have an even better third alternative.

Come to think of it, why don't we do the same thing for BodyPlan and Integument, make them components of a `BodyEntity` instead? Then the `SpeciesEntity` could just have a property `body` that takes an id of a `BodyEntity` as its value? Please let me know if this thinking is faulty.  



Once you've addressed those issues, I'd like you to generate a sample population for the registry using Mudkip, Quilava, Meganium, Blaziken, and Sceptile. But you can ask me for any clarifications before you do that.

