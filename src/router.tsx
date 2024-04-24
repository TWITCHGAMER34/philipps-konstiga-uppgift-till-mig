import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import JokesPage from "./pages/JokesGenerator/JokesGen.tsx";
import PassGen from "./pages/PasswordGen/PassGen.tsx";
import PassCheck from "./pages/PasswordCheck/PassCheck.tsx";
import ParticlesBg from "./pages/part/Particles.tsx";
import styles from './navbar.module.scss';

export default function Router() {
    return (
        <BrowserRouter>
            <nav className={styles.navbar}>
                <Link to={"/"} className={styles.navLink}>Home</Link>
                <Link to={"/Jokes"} className={styles.navLink}>Jokes</Link>
                <Link to={"/PassGen"} className={styles.navLink}>Password Generator</Link>
                <Link to={"/PassCheck"} className={styles.navLink}>Password Checker</Link>
            </nav>
            <ParticlesBg/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/jokes"} element={<JokesPage/>}/>
                <Route path={"/passgen"} element={<PassGen/>}/>
                <Route path={"/passcheck"} element={<PassCheck/>}/>
            </Routes>
        </BrowserRouter>
    );
}