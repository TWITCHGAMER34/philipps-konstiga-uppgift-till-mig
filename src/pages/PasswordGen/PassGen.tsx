import { useState } from 'react';
import styles from './passgen.module.scss';

export default function PassGen() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(8);

    function checkPassword(password: string) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()]/.test(password);
        return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    }

    function generatePassword() {
        let generatedPassword = '';
        if (length >= 35){
            generatedPassword += "Password length should be less than 35 characters"
            setPassword(generatedPassword)
            return
        }if (length < 8){
            generatedPassword += "Password length should be greater than 8 characters"
            setPassword(generatedPassword)
            return
        }
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

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Generate a password</h1>
            <input className={styles.inputField} type="number" placeholder="Length" value={length} onChange={(e) => setLength(Number(e.target.value))}/>
            <button className={styles.button} onClick={generatePassword}>Generate</button>
            <p className={length >= 35 || length < 8 ? styles.passwordError : ''} >Your generated password is: {password}</p>
        </div>
    );
}