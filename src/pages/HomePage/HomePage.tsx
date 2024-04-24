import { motion } from "framer-motion";
import styles from './home.module.scss';

export default function HomePage() {
    return (
        <div className={styles.titleContainer}>
            <motion.h1
                initial={{opacity: 0, scale: 0.75, y: -50}}
                animate={{opacity: 1, scale: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                Welcome to this page
            </motion.h1>
        </div>
    );
}