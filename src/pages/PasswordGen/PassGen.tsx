import {useState} from 'react';
import styles from './passgen.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function PassGen() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(50);
    const [isCopied, setIsCopied] = useState(false);
    const sliderThumbStyle = {
        background: length === 100 || length < 8 ? 'red' : 'green'
    };
    const rangeIcon = length > 8 && length < 100 ?
        <FontAwesomeIcon icon={faCheck} color="green" /> :
        <FontAwesomeIcon icon={faTimes} color="red" />;

    function checkPassword(password: string) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()]/.test(password);
        return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    }

    function generatePassword() {
        let generatedPassword = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }
        if (checkPassword(generatedPassword)) {
            setPassword(generatedPassword);
        } else {
            generatePassword();
        }
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(password);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Generate a password</h1>
            <p>Selected length: {length} [{rangeIcon}]</p>
            <input style={sliderThumbStyle} className={styles.inputField} id={styles.myRange} type="range" min={0} max={100} placeholder="Length" value={length}
                   onChange={(e) => setLength(Number(e.target.value))}/>
            <button className={styles.button} disabled={length === 100 || length < 8} onClick={generatePassword}>Generate</button>
            <p>Your generated password is:</p>
            {password && (
                <div className={styles.genPassBox}>
                    <p className={styles.genPass}>{password}</p>
                    <button onClick={copyToClipboard}>
                        <FontAwesomeIcon icon={faCopy}/>
                    </button>
                </div>
            )}
            {isCopied && (
                <div className={styles.alertModal}>
                    Password copied to clipboard!
                </div>
            )}
        </div>
    );
}