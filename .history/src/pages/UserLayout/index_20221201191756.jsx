import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { redirect } from 'react-router-dom';
import { ROUTES } from 'routes';

function UserLayout({ ...rest }) {
    const accessToken = localStorage.getItem('accessToken');

    !accessToken ? redirect(ROUTES.LOGIN) : <Navigate to={ROUTES.USER.HOME} />;

    return (
        <>
            <Outlet />
        </>
    );
}
export default UserLayout;
