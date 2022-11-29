import React from 'react';
import { Route, Redirect } from 'react-router';

function PrivateRoute({ children, ...rest }) {
    const isLoggedIn = Boolean(localStorage.getItem('asscestoken'));
    console.log(isLoggedIn);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn === true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;
