import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoUrl=form.photoUrl.value;
        const email=form.email.value;
        const password=form.password.value;
        createUser(email,password)
        .then(result=>console.log(result.user))
        .catch(err=>console.error(err));
        console.log(email,name, photoUrl,password);
        
    }
    return (
        <div className="hero bg-base-200">
            <div className="card w-full max-w-md m-16 shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photoUrl' placeholder="Your Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <p></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign In" />
                    </div>
                    <label className="label ">
                        <Link to='/signin' className="text-md">Already have an Account? Sign In here.</Link>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default SignUp;