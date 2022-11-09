import React from 'react';
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
    return (
        <div className="hero bg-base-200">
                <div className="card w-full max-w-md m-16 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        <button className="btn bg-green-500 btn-outline mt-6"><FaGoogle/> Sign In by Google</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SignIn;