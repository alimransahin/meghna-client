import React, { useContext } from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const location=useLocation()
    const {user, loading}=useContext(AuthContext);
    if(loading){
        return <div className='text-center'><button type="button" disabled>
            <img src="https://i.ibb.co/HxzcfmF/Rolling-1-5s-71px.gif" alt="" />
            Processing...
        </button></div>
        
    }
    if(user && user.uid){
        return children
    }
    return(<Navigate to='/signin' state={{from:location}} replace></Navigate>)
};

export default PrivateRoutes;