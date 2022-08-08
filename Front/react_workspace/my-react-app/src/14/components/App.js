import { useEffect, useState } from "react";
import { authService, dbService } from "../firebase.conf";
import AppRouter from "./Router";

function App() {
    const [isLogin, setIsLogin] = useState(authService.currentUser);
    // const [carList, setCarList] = useEffect();

    function loginEffect() {
        authService.onAuthStateChanged((user) => {
            setIsLogin(user);
            console.log(user);
        })
    }


    useEffect(() => {
        loginEffect();
    }, []);

    async function onLogin(email, password) {
        let data = await authService.signInWithEmailAndPassword(email, password);
        console.log(email, password);
        console.log(data);
        if (data) {
            setIsLogin(true);
        }
    }

    async function onLogout() {
        let data = await authService.signOut();

        if (data) {
            setIsLogin(false);
        }
    }

    return (<>
        <div className="container">
            <AppRouter isLogin={isLogin} onLogin={onLogin} onLogout={onLogout} />
        </div>
    </>);
}

export default App;