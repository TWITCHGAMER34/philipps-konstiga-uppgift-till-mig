import {motion} from "framer-motion";
import styles from './home.module.scss';
import axios from 'axios';
import {useState, useEffect} from "react";
import Modal from 'react-modal';
import {Helmet} from "react-helmet";

Modal.setAppElement('#root');

export default function HomePage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [joke, setJoke] = useState({setup: '', punchline: ''});
    const [loadingJoke, setLoadingJoke] = useState(false);

    async function generateJokes() {
        setLoadingJoke(true);
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        const joke = {setup: response.data.setup, punchline: response.data.punchline};
        setJoke(joke);
        localStorage.setItem(new Date().toDateString(), JSON.stringify(joke));
        setLoadingJoke(false);
    }

    useEffect(() => {
        const showModal = sessionStorage.getItem('showModal');
        if (!showModal) {
            setModalIsOpen(true);
            sessionStorage.setItem('showModal', 'false');
        }
        const today = new Date().toDateString();
        const storedJoke = localStorage.getItem(today);
        if (storedJoke) {
            setJoke(JSON.parse(storedJoke));
        } else {
            generateJokes();
        }
    }, []);

    return (
        <div className={styles.pageContainer}>
            <Helmet title={"Home"} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Password Information Modal"
                className={styles.modalContent}
            >
                <button className={styles.modalCloseButton} onClick={() => setModalIsOpen(false)}>Close</button>
                <h2 className={styles.modalHeader}>Important Information About Passwords</h2>
                <div className={styles.modalBody}>
                    <p>This website does <b><u>not</u></b> store any passwords you <b><u>generate</u></b>.
                    </p>
                    <p>It's important to use <b><u>unique</u></b>. and strong passwords for each of your accounts to
                        protect your personal information.</p>
                    <p>Here are some tips for creating memorable passwords without sacrificing security:</p>
                    <ul>
                        <li>Use a mix of letters, numbers, and special characters.</li>
                        <li>Try to create a password that you can remember but is hard for others to guess.</li>
                        <li>Avoid using personal information like your name, birthdate, or common words.</li>
                    </ul>
                </div>
            </Modal>
            <div className={styles.titleContainer}>
                <motion.h1
                    initial={{opacity: 0, scale: 0.75, y: -50}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Welcome to PlayNPractical
                </motion.h1>
            </div>
            <motion.h2
                initial={{opacity: 0, scale: 0.75, y: -50}}
                animate={{opacity: 1, scale: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                Joke of the day:
            </motion.h2>
            <motion.p
                initial={{opacity: 0, scale: 0.75, y: -50}}
                animate={{opacity: 1, scale: 1, y: 0}}
                transition={{duration: 0.5}}

                className={styles.joke}>
                {joke.setup}</motion.p>
            {loadingJoke && <p>Loading...</p>}
            <motion.p
                initial={{opacity: 0, scale: 0.75, y: -50}}
                animate={{opacity: 1, scale: 1, y: 0}}
                transition={{duration: 0.5}}

                className={styles.joke}>
                {joke.punchline}</motion.p>
        </div>
    );
}