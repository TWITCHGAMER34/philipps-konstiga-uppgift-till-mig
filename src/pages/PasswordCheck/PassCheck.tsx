import {useEffect, useState} from 'react';
import styles from './pass.module.scss';
import zxcvbn from 'zxcvbn';

export default function PassCheck() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState<{
        score: number,
        warnings: string,
        suggestions: string[],
        crackTimes: zxcvbn.ZXCVBNAttackTime | undefined,
        guesses: number,
        calcTime: number
    }>({
        score: 0,
        warnings: '',
        suggestions: [],
        crackTimes: undefined,
        guesses: 0,
        calcTime: 0
    });

    useEffect(() => {
        checkPassword();
    }, [password]);

    function checkPassword() {
        const result = zxcvbn(password);
        setStrength({
            score: result.score,
            warnings: result.feedback.warning,
            suggestions: result.feedback.suggestions,
            crackTimes: result.crack_times_display,
            guesses: result.guesses,
            calcTime: result.calc_time
        });
    }

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Check your password</h1>
            <input className={styles.inputField} type="password" value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
            <div className={styles.progressContainer}>
                <div className={styles.progressBar} style={{
                    width: `${strength.score * 25}%`,
                    backgroundColor: strength.score === 4 ? '#4caf50' : '#ff9800',
                    color: strength.score === 4 ? "white" : "black"
                }}>
                    <span>Strength: {strength.score * 25}%</span>
                </div>
            </div>
            <div className={styles.score}>
                {strength.warnings && <p className={styles.warning}>Warnings: {strength.warnings}</p>}
                {strength.suggestions.length > 0 &&
                    <p className={styles.suggestions}>Suggestions: {strength.suggestions.join(', ')}</p>}
                <p className={styles.info}>Estimated time to crack (offline, slow
                    hashing):</p>
                <p> {strength.crackTimes?.offline_slow_hashing_1e4_per_second}</p>
                <p className={styles.info}>Estimated time to crack (offline, fast
                    hashing):</p>
                <p>{strength.crackTimes?.offline_fast_hashing_1e10_per_second}</p>
                <p className={styles.info}>Estimated time to crack (online, no
                    throttling):</p>
                <p>{strength.crackTimes?.online_no_throttling_10_per_second}</p>
                <p className={styles.info}>Estimated time to crack (online,
                    throttling):</p>
                <p>{strength.crackTimes?.online_throttling_100_per_hour}</p>
                <p className={styles.info}>Estimated guesses needed:</p>
                <p>{strength.guesses}</p>
                <p className={styles.info}>Calculation time:</p>
                <p>{strength.calcTime} ms</p>
            </div>
        </div>
    );
}