import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from './game.module.scss';

enum GameMode {
    Easy = 'Easy',
    Medium = 'Medium',
    Hard = 'Hard',
    Expert = 'Expert',
    Endless = 'Endless',
    Geography = 'Geography',
    History = 'History',
    Science = 'Science'
}

export default function FactOrFalseChoose() {

    return (
        <div className={styles.gameModeSelection}>
            <h1>Select Game Mode</h1>
            {Object.values(GameMode).map(mode => (
                <Link to={`/Fact&False/Play/${mode}`} key={mode}>
                    {mode}
                </Link>
            ))}
        </div>
    );
}