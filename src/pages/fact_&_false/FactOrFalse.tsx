import {useNavigate} from "react-router-dom";
import styles from './game.module.scss';

export default function FactOrFalse() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/Fact&False/Choose");
    };

    return (
        <div className={styles.gameDescription}>
            <h1><u>Fact or False</u></h1>
            <p>
                Welcome to Fact or False! In this game, you will be presented with a series of statements.
                Your task is to determine whether each statement is a fact (true) or false.
                For each correct answer, you will score a point. The game continues until you have gone through all the statements.
                Your final score will be the total number of correct answers. Good luck!
            </p>
            <button className={styles.startButton} onClick={handleStart}>Start Game</button>
        </div>
    );
}