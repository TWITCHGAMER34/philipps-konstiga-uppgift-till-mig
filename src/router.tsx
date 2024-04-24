import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import JokesPage from "./pages/JokesGenerator/JokesGen.tsx";
import PassGen from "./pages/PasswordGen/PassGen.tsx";
import PassCheck from "./pages/PasswordCheck/PassCheck.tsx";
import ParticlesBg from "./pages/part/Particles.tsx";
import styles from './navbar.module.scss';
import FactOrFalse from "./pages/fact_&_false/FactOrFalse.tsx";
import FactOrFalseGame from "./pages/fact_&_false/FactOrFalsePlay.tsx";
import Page404 from "./404.tsx";
import FactsGameEnd from "./pages/fact_&_false/FactsGameEnd.tsx";
import FactOrFalseChoose from "./pages/fact_&_false/FactOrFalseChoose.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <nav className={styles.navbar}>
                <Link to={"/"} className={styles.navLink}>Home</Link>
                <Link to={"/Jokes"} className={styles.navLink}>Jokes</Link>
                <Link to={"/PassGen"} className={styles.navLink}>Password Generator</Link>
                <Link to={"/PassCheck"} className={styles.navLink}>Password Checker</Link>
                <Link to={"/Fact&False"} className={styles.navLink}>Fact or False</Link>
            </nav>
            <ParticlesBg/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/jokes"} element={<JokesPage/>}/>
                <Route path={"/passgen"} element={<PassGen/>}/>
                <Route path={"/passcheck"} element={<PassCheck/>}/>
                <Route path={"/Fact&False"} element={<FactOrFalse/>}/>
                <Route path={"/Fact&False/Choose"} element={<FactOrFalseChoose/>}/>
                <Route path={"/Fact&False/Play/:gameMode"} element={<FactOrFalseGame/>}/>
                <Route path={"/Fact&False/end"} element={<FactsGameEnd/>}/>
                <Route path={"*"} element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    );
}