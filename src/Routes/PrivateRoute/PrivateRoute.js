import React, { Children, useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider.js';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext) ;
    const location = useLocation()
    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;