// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {
        id: 1,
        name: 'John',
        sex: 'female',
        age: 20,
        health: 55
    },
    {
        id: 2,
        name: 'Jane',
        sex: 'male',
        age: 32,
        health: 88
    },
    {
        id: 3,
        name: 'Jake',
        sex: 'female',
        age: 11,
        health: 100
    },
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} humans
 */
export const transformers: TransformerHero[] = [
    {
    id: 1,
    name: 'Yang',
    wings: 2,
    wheels: 3,
    clan: 'Chinese'
    },

    {
    id: 2,
    name: 'Li',
    wings: 1,
    wheels: 4,
    clan: 'Japanese'
   },

   {
    id: 3,
    name: 'Yu',
    wings: 6,
    wheels: 1,
   clan: 'Korean'
  },
];
