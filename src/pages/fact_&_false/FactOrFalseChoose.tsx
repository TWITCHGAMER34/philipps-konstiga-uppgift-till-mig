import {Link} from 'react-router-dom';
import styles from './FactOrFalseChoose.module.scss';
import {initialItemsEasy} from "./lib/InitialItemsEasy.ts";
import {initialItemsMedium} from "./lib/InitialItemsMedium.ts";
import {initialItemsHard} from "./lib/InitialItemsHard.ts";
import {initialItemsExpert} from "./lib/InitialItemsExpert.ts";
import {initialItemsEndless} from "./lib/InitialItemsEndless.ts";
import {initialItemsGeography} from "./lib/InitialItemsGeography.ts";
import {initialItemsHistory} from "./lib/InitialItemsHistory.ts";
import {initialItemsScience} from "./lib/InitialItemsScience.ts";

export type Choice = "fact" | "false";

export type QuestionType = {
    text: string;
    type: Choice;
}

export const GameMode = {
    "Easy": {
        name: 'Easy',
        questions: initialItemsEasy,
    },
    "Medium": {
        name: 'Medium',
        questions: initialItemsMedium,
    },
    "Hard": {
        name: 'Hard',
        questions: initialItemsHard,
    },
    "Expert": {
        name: 'Expert',
        questions: initialItemsExpert,
    },
    "Geography": {
        name: 'Geography',
        questions: initialItemsGeography,
    },
    "History": {
        name: 'History',
        questions: initialItemsHistory,
    },
    "Science": {
        name: 'Science',
        questions: initialItemsScience,
    },
    "Endless": {
        name: 'Endless',
        questions: initialItemsEndless,
    },
}

export default function FactOrFalseChoose() {
    return (
        <div className={styles.gameModeSelection}>
            <h1>Select Game Mode</h1>
            <div className={styles.LinkBox}>
            {Object.keys(GameMode).map(mode => (
                <Link to={`/Fact&False/Play/${mode}`} key={mode} className={styles.link}>
                    {mode}
                </Link>
            ))}
            </div>
        </div>
    );
}