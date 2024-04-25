import {useState} from 'react';
import axios from 'axios';
import styles from './jokesgen.module.scss';

export default function JokesPage() {
    const [joke, setJoke] = useState({setup: '', punchline: ''});
    const [meme, setMeme] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [loadingJoke, setLoadingJoke] = useState(false);
    const [loadingMeme, setLoadingMeme] = useState(false);

    async function generateJokes() {
        setLoadingJoke(true);
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        setJoke({setup: response.data.setup, punchline: response.data.punchline});
        setShowAnswer(false); // Reset the showAnswer state whenever a new joke is generated
        setLoadingJoke(false);
    }

    async function generateMeme() {
        setLoadingMeme(true);
        const response = await axios.get('https://meme-api.com/gimme');
        console.log(response.data); // Log the entire response to the console
        setMeme(response.data.url);
        setLoadingMeme(false);
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.jokeBox}>
                <h1 className={styles.title}>Generate Jokes</h1>
                <button className={styles.button} onClick={generateJokes} disabled={loadingJoke}>Generate Joke</button>
                <p className={styles.joke}>{joke.setup}</p>
                {showAnswer && <p className={styles.joke}>{joke.punchline}</p>}
                {!showAnswer && joke.setup &&
                    <button className={styles.button} onClick={() => setShowAnswer(true)}>Show Answer</button>}
            </div>
            <div className={styles.memeBox}>
            <h1 className={styles.title}>Generate memes</h1>
            <button className={styles.button} onClick={generateMeme} disabled={loadingMeme}>Generate Meme</button>
            {meme && <img className={styles.meme} src={meme} alt="Meme"/>}
            </div>
        </div>
    );
}