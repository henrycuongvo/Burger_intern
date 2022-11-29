import { Route, Routes } from 'react-router';
import BurgerBuilder from 'pages/BurgerBuilder';
// import { Switch } from 'react-router-dom';

import './App.css';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Checkout from 'pages/Checkout';
import PrivateRoute from 'pages/PrivateRoute';
import { Children } from 'react';
function App() {
    return (
        <div className="App">
            <Route path="/" element={<BurgerBuilder />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

            {/* <Route path="/checkout" element={<Checkout />}></Route> */}
            <Route path="/private">
                <PrivateRoute>
                    <Children />{' '}
                </PrivateRoute>
            </Route>
        </div>
    );
}

export default App;
