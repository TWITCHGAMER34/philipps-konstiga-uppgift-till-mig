import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
    return (
        <div>
            <motion.h1
                initial={{opacity: 0, scale: 0.75, y: -50}}
                animate={{opacity: 1, scale: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                Welcome to this page
            </motion.h1>
            <Link to={"/Jokes"}>
                <button>Hello</button>
            </Link>
            <Link to={"/PassGen"}>
                <button>Pass</button>
            </Link>
            <Link to={"/PassCheck"}>
                <button>passcheck</button>
            </Link>
        </div>
    );
}