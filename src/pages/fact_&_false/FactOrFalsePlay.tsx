import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './game.module.scss';
import {Choice, GameMode} from "./FactOrFalseChoose.tsx";

export type ItemType = {
    text: string,
    type: Choice,
}

export type ItemChoice = {
    item: ItemType;
    choice: Choice;
}

export default function FactOrFalsePlay() {
    const {gameMode} = useParams();

    const [currentItem, setCurrentItem] = useState<undefined | ItemType>(undefined);
    const [items, setItems] = useState<ItemType[] | undefined>(undefined); // New state variable for the items [
    const [userChoices, setUserChoices] = useState<ItemChoice[]>([]); // New state variable for the user's choices
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        if (!Object.keys(GameMode).includes(gameMode || "")) {
            navigate("/Fact&False/Choose")
        }
        const mode = gameMode as keyof typeof GameMode;
        setItems(GameMode[mode].questions || []);
        setCurrentItem(GameMode[mode].questions?.[Math.floor(Math.random() * GameMode[mode].questions.length)]);
    }, []);

    useEffect(() => {
        localStorage.setItem("userChoices", JSON.stringify(userChoices));
        localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
        localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectAnswers));
        if (items?.length === 0) {
            navigate("/Fact&False/end");
        }
    }, [
        items
    ]);

    const handleUserChoice = (choice: Choice) => {
        if (!currentItem) return;
        setUserChoices(prev => [...prev, {item: currentItem, choice}]);

        if (choice === currentItem.type) {
            setMessage("Correct!");
            setScore(score + 1);
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setMessage("Incorrect! The correct answer was " + currentItem.type + ".");
            setIncorrectAnswers(incorrectAnswers + 1);
        }

        // First remove the current item from the items array
        const newItems = items?.filter(item => item !== currentItem);
        setItems(newItems);

        if (newItems?.length === 0) {
            setMessage("You've gone through all the facts and jokes!");
        } else {
            // Then set the new currentItem
            setCurrentItem(newItems?.[Math.floor(Math.random() * newItems.length)]);
        }
    };

    return (
        <div className={styles.gameContainer}>
            <h1><span className={styles.FactText}>Fact</span> or <span className={styles.FalseText}>False</span></h1>
            <div className={styles.GameCard}>
                <p className={styles.GameText}>Score: <span className={styles.ScoreInt}>{score}</span></p>
                <p className={styles.GameText}>Number of questions left: <span className={styles.Left}>{items?.length}</span></p>
                <p className={styles.question}>{currentItem?.text}</p>
                <div className={styles.buttons}>
                    <button onClick={() => handleUserChoice("fact")}>
                        <FontAwesomeIcon icon={faCheck} color="green"/>
                    </button>
                    <button onClick={() => handleUserChoice("false")}>
                        <FontAwesomeIcon icon={faTimes} color="red"/>
                    </button>
                </div>
            <p className={message.startsWith("Correct") ? styles.correctMessage : styles.incorrectMessage}>{message}</p>
            </div>
        </div>
    );
}