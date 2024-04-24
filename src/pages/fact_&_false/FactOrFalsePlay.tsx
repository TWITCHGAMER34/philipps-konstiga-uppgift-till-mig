import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {initialItems} from "./InitialItems.ts";
import styles from './game.module.scss';


export default function FactOrFalseGame() {
    const [currentItem, setCurrentItem] = useState(initialItems[Math.floor(Math.random() * initialItems.length)]);
    const [items, setItems] = useState(initialItems); // New state variable for the items [
    const [userChoices, setUserChoices] = useState<object []>([]); // New state variable for the user's choices
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("userChoices", JSON.stringify(userChoices));
        localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
        localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectAnswers));
        if (items.length === 0) {
            navigate("/Fact&False/end");
        }
    }, [
        items
    ]);

    const handleUserChoice = (choice: string) => {
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
        const newItems = items.filter(item => item !== currentItem);
        setItems(newItems);

        if (newItems.length === 0) {
            setMessage("You've gone through all the facts and jokes!");
        } else {
            // Then set the new currentItem
            setCurrentItem(newItems[Math.floor(Math.random() * newItems.length)]);
        }
    };

    return (
        <div className={styles.gameContainer}>
            <h1>Fact or False</h1>
            <p>Score: {score}</p>
            <p>Number of questions left: {items.length}</p>
            <p className={styles.question}>{currentItem.text}</p>
            <div className={styles.buttons}>
                <button onClick={() => handleUserChoice("fact")}>Fact</button>
                <button onClick={() => handleUserChoice("false")}>False</button>
            </div>
            <p>{message}</p>
        </div>
    );
}