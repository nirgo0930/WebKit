import { useState } from "react";

function Auth(props) {
    const [email, setEmail] = useState("test@test.com");
    const [password, setPW] = useState("1q2w3e");

    return (<>
        <h3>Auth</h3>
        <form>
            <input type="email" placeholder="Email" value={email} onChange={e => { setEmail(e.currentTarget.value) }} required />
            <input type="password" placeholder="Password" value={password} onChange={e => { setPW(e.currentTarget.value) }} required />
            <input type="submit" value="LogIn" onClick={e => { e.preventDefault(); props.onLogin(email, password) }} />
        </form>
    </>);
}

export default Auth;