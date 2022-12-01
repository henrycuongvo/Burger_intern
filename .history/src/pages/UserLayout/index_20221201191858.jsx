import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { redirect } from 'react-router-dom';
import { ROUTES } from 'routes';

function UserLayout({ ...rest }) {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        return <Navigate to={ROUTES.LOGIN} />;
    }

    return (
        <>
            <Outlet />
        </>
    );
}
export default UserLayout;
