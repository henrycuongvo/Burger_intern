import React from 'react';
import { Outlet, Route } from 'react-router';
import { redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    const isLoggedIn = Boolean(localStorage.getItem('asscestoken'));
    console.log(isLoggedIn);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn === true ? <Outlet /> : redirect('/login')
            }
        />
    );
}
export default PrivateRoute;
