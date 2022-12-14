import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>All Services</Link></li>
        {
            user?.uid ?
                <><li><Link to='/my-reviews'>My Reviews</Link></li>
                    <li><Link to='/add-service'>Add Service</Link></li></>
                :
                ''
        }

        <li><Link to='/blog'>Blog</Link></li>
    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <img className='w-16' src="https://i.ibb.co/xY2fX62/images-q-tbn-ANd9-Gc-T1-MOh-Bl-Cpg-EQnpm-Ng-Ijx-WHr8-Wt-HIso4-Rr3jv-Pj-Pp-Nd-Ybqr4-I5f-Gz-2-Bl-HCw-I.jpg" alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                        :
                        <Link to='/signin' className="btn">Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Header;