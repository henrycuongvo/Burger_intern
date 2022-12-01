import { Route, Routes } from 'react-router-dom';
import BurgerBuilder from 'pages/BurgerBuilder';
import { createContext } from 'react';

import './App.css';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Checkout from 'pages/Checkout';
import UserLayout from 'pages/UserLayout';
import Orders from 'pages/Orders';
import Doashboard from 'pages/Doashboard';
export const NameContext = createContext();

function App() {
    return (
        <NameContext.Provider>
            <Routes>
                <Route path="/" element={<BurgerBuilder />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>

                {/* <PrivateRoute> */}
                <Route path="/user" element={<UserLayout />}>
                    <Route path="checkout" element={<Checkout />}></Route>
                    <Route path="orders" element={<Orders />}></Route>
                    <Route path="doashboard" element={<Doashboard />}></Route>
                </Route>

                {/* </PrivateRoute> */}
            </Routes>
        </NameContext.Provider>
    );
}

export default App;
