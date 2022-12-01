import { Route, Routes } from 'react-router-dom';
import BurgerBuilder from 'pages/BurgerBuilder';
import { createContext } from 'react';

import './App.css';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Checkout from 'pages/Checkout';
import PrivateRoute from 'pages/PrivateRoute';
import Orders from 'pages/Orders';
export const NameContext = createContext();

function App() {
    return (
        <NameContext.Provider>
            <Routes>
                <Route path="/" element={<BurgerBuilder />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>

                {/* <PrivateRoute> */}
                <Route path="/private" element={<PrivateRoute />}>
                    <Route path="checkout" element={<Checkout />}></Route>
                    <Route path="orders" element={<Orders />}></Route>s
                </Route>

                {/* </PrivateRoute> */}
            </Routes>
        </NameContext.Provider>
    );
}

export default App;
