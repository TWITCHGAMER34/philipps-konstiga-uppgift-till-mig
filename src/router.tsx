import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import JokesPage from "./pages/JokesGenerator/JokesGen.tsx";
import PassGen from "./pages/PasswordGen/PassGen.tsx";
import PassCheck from "./pages/PasswordCheck/PassCheck.tsx";

export default function Router() {
    return (
            <BrowserRouter>
                <Link to={"/"}><button>Home</button></Link>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/jokes"} element={<JokesPage/>}/>
                    <Route path={"/passgen"} element={<PassGen/>}/>
                    <Route path={"/passcheck"} element={<PassCheck/>}/>
                </Routes>
            </BrowserRouter>
);
}