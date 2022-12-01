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
import { ROUTES } from './constants/routes';
export const NameContext = createContext();

function App() {
    return (
        <NameContext.Provider>
            <Routes>
                <Route path={ROUTES.HOME} element={<BurgerBuilder />}></Route>
                <Route path={ROUTES.LOGIN} element={<Login />}></Route>
                <Route path={ROUTES.REGISTER} element={<Register />}></Route>

                {/* <UserRoute> */}
                <Route element={<UserLayout />}>
                    <Route
                        path={ROUTES.USER.CHECKOUT}
                        element={<Checkout />}
                    ></Route>
                    <Route
                        path={ROUTES.USER.ORDERS}
                        element={<Orders />}
                    ></Route>
                    <Route
                        path={ROUTES.USER.DASHBOARD}
                        element={<Doashboard />}
                    ></Route>
                </Route>
            </Routes>
        </NameContext.Provider>
    );
}

export default App;
