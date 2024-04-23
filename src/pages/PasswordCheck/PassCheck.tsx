export default function PassCheck() {
    function checkPassword() {
        // This function should check the password
        //TODO: Implement this function
        return 0
    }

    return (
        <div>
            <h1>Check your password</h1>
            <input type="password"/>
            <button onClick={checkPassword}>Check</button>
        </div>
    );
}