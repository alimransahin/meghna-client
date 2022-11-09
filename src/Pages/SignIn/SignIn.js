import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignIn = () => {
    const googleProvider=new GoogleAuthProvider()
    const { signInUser, googleSignIn, error, setError }=useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                setError('');
            })
            .catch(err => {
                setError(err);
            })
    }
    const handleGoogle = ()=>{
        googleSignIn(googleProvider)
        .then(result=>{
            setError('');
        })
        .catch(err=>{
            setError(err);
        })

    }
    return (
        <div className="hero bg-base-200">
                <div className="card w-full max-w-md m-16 shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className='text-red-600'>{error?error.message:""}</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign In" />
                            
                        </div>
                    <label className="label ">
                         <Link to='/signup' className="text-md">You are new? Sign Up here.</Link> 
                    </label>
                    </form>
                    
                        <button onClick={handleGoogle} className="btn bg-green-500 btn-outline mb-8 mx-8"><FaGoogle/> Sign In by Google</button>
                    
                </div>
            </div>
    );
};

export default SignIn;