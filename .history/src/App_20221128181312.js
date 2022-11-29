import { Route, Routes } from 'react-router';
import BurgerBuilder from 'pages/BurgerBuilder';
// import { Switch } from 'react-router-dom';

import './App.css';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Checkout from 'pages/Checkout';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<BurgerBuilder />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/checkout" element={<Checkout />}>
                    {' '}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
