import {QuestionType} from "../FactOrFalseChoose.tsx";
import {initialItemsEasy} from "./InitialItemsEasy.ts";
import {initialItemsMedium} from "./InitialItemsMedium.ts";
import {initialItemsHard} from "./InitialItemsHard.ts";
import {initialItemsExpert} from "./InitialItemsExpert.ts";
import {initialItemsGeography} from "./InitialItemsGeography.ts";
import {initialItemsHistory} from "./InitialItemsHistory.ts";
import {initialItemsScience} from "./InitialItemsScience.ts";


export let initialItemsEndless: QuestionType[] = [
    ...initialItemsEasy,
    ...initialItemsMedium,
    ...initialItemsHard,
    ...initialItemsExpert,
    ...initialItemsGeography,
    ...initialItemsHistory,
    ...initialItemsScience

];