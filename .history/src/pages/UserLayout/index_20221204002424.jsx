import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { ROUTES } from 'routes';

function UserLayout() {
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
