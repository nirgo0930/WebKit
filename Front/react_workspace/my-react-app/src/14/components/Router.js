import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';

function AppRouter(props) {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={props.isLogin
                    ? <Home onLogout={props.onLogout}></Home>
                    : <Auth onLogin={props.onLogin}></Auth>} />
                <Route path="/Profile" element={<Profile></Profile>} />
            </Routes>
        </BrowserRouter>
    </>);
}

export default AppRouter;