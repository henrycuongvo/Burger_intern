import React from 'react';
import { Outlet, Route } from 'react-router';
import { redirect } from 'react-router-dom';

function PrivateRoute({ ...rest }) {
    return (
        <>
            <div> Private Header</div>
            <Outlet />
        </>
    );
}
export default PrivateRoute;
