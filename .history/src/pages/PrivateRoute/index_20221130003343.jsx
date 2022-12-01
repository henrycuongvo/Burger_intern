import React from 'react';
import { Outlet, Route } from 'react-router-dom';
import { redirect } from 'react-router-dom';

function PrivateRoute() {
    // const isLoggedIn = Boolean(localStorage.getItem('asscestoken'));
    return (
        // <Route
        //     {...rest}
        //     render={({ location }) =>
        //         isLoggedIn === true ? <Outlet /> : redirect('/login')
        //     }
        // />
        <div>
            <Outlet />
        </div>
    );
}
export default PrivateRoute;
