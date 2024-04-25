import {useMemo} from "react";
import styles from './game.module.scss';
import {Link} from "react-router-dom";

export default function FactsGameEnd() {
    const userChoices = useMemo(() => {
        const userChoices = localStorage.getItem("userChoices");
        return userChoices ? JSON.parse(userChoices) : [];
    }, []);

    const correctAnswers = useMemo(() => {
        const correctAnswers = localStorage.getItem("correctAnswers");
        return correctAnswers ? JSON.parse(correctAnswers) : 0;
    }, []);

    const incorrectAnswers = useMemo(() => {
        const incorrectAnswers = localStorage.getItem("incorrectAnswers");
        return incorrectAnswers ? JSON.parse(incorrectAnswers) : 0;
    }, []);

    return (
        <div className={styles.endContainer}>
            <h1>Game End</h1>
            <p>Correct Answers: <span className={styles.correctAns}>{correctAnswers}</span></p>
            <p>Incorrect Answers: <span className={styles.incorrectAns}>{incorrectAnswers}</span></p>
            < Link to="/Fact&False/Choose" className={styles.playAgainButton}>Play Again</Link>
            {userChoices.map((userChoice: any, index: number) => (
                <div key={index}
                     className={`${styles.card} ${userChoice.choice === userChoice.item.type ? styles.correct : styles.incorrect}`}>
                    <p>Question: {userChoice.item.text}</p>
                    <p>Your Answer: {userChoice.choice}</p>
                    <p>Correct Answer: {userChoice.item.type}</p>
                </div>
            ))}
        </div>
    );
};