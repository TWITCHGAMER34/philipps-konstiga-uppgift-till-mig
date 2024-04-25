import {Helmet} from "react-helmet";


export default function Page404() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            color: 'white',
            fontSize: '2em',
            textAlign: 'center'
        }}>
            <Helmet title={"404"} />
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    )
}