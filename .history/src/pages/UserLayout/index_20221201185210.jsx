import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { redirect } from 'react-router-dom';

function UserLayout({ ...rest }) {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    // accessToken === false ? redirect('/login') : <Navigate to={'/private'} />;

    return (
        <>
            <Outlet />
        </>
    );
}
export default UserLayout;
