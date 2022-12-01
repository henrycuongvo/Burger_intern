import React from 'react';
import { Outlet, Route } from 'react-router';
import { redirect } from 'react-router-dom';

function PrivateRoute({ Outlet, ...rest }) {
    const isLoggedIn = Boolean(localStorage.getItem('asscestoken'));
    console.log(isLoggedIn);
    return (
        <>
           {...rest}
            render={({ location }) =>
                isLoggedIn === true ? <Outlet /> : redirect('/login')
            }
        </>
         
    );
}
export default PrivateRoute;
