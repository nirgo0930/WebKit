import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './inc/Head';
import AboutMe from './inc/AboutMe';
import Comment from './inc/Comment';

function Home() {
    return (<>
        <div className="container">
            <h1>LYS's HomePage</h1>
            <BrowserRouter>
                <Head />
                <Routes>
                    <Route path='/' element={"This is Main page."} />
                    <Route path='/AboutMe' element={<AboutMe />} />
                    <Route path='/Comment' element={<Comment />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>);
}

export default Home;