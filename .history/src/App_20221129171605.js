import { Route, Routes } from 'react-router';
import BurgerBuilder from 'pages/BurgerBuilder';
import { createContext } from 'react';

import './App.css';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Checkout from 'pages/Checkout';
import PrivateRoute from 'pages/PrivateRoute';
export const NameContext = createContext();

function App() {
    return (
        <div className="App">
            <NameContext.Provider>
                <Routes>
                    <Route path="/" element={<BurgerBuilder />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="/checkout" element={<Checkout />}></Route>
                    </Route>
                </Routes>
            </NameContext.Provider>
        </div>
    );
}

export default App;
