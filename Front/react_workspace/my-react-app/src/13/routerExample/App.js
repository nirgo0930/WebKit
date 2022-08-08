import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './inc/AboutUs';
import Contact from './inc/Contact';
import Header from './inc/Header';
import Lecture from './inc/Lecture';
import Main from './inc/Main';
import Product from './inc/Product';

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/AboutUs' element={<AboutUs />} />
                        <Route path='/Product' element={<Product />} />
                        <Route path='/Lecture' element={<Lecture />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Routes>
                </BrowserRouter>

            </div>
        </>
    );
}

export default App;