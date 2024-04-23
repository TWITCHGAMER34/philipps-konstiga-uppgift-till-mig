import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to this page</h1>
            <Link to={"/Jokes"}><button>Hello</button></Link>
            <Link to={"/PassGen"}><button>Pass</button></Link>
            <Link to={"/PassCheck"}><button>passcheck</button></Link>
        </div>
    );
}