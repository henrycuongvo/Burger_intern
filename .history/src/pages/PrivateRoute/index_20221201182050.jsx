import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { redirect } from 'react-router-dom';

function PrivateRoute({ ...rest }) {
    const accessToken = localStorage.getItem('accessToken');

    accessToken === false ? (
        <Navigate to={'/login'} />
    ) : (
        <Navigate to={'/private'} />
    );

    return (
        <>
            <Outlet />
        </>
    );
}
export default PrivateRoute;
