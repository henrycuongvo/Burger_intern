import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { redirect } from 'react-router-dom';

function Userlayout({ ...rest }) {
    const accessToken = localStorage.getItem('accessToken');
    accessToken === false ? redirect('/login') : <Navigate to={'/private'} />;

    return (
        <>
            <Outlet />
        </>
    );
}
export default Userlayout;