import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ServicesDetails = () => {
    const service = useLoaderData();
    const { _id, img, price, title, description } = service;
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const handleSubmit=event=>{
        event.preventDefault();
        const text=event.target.text.value;
        console.log(text);

        const review={
            service: _id,
            text:text,
            author: user.displayName ? user.displayName :"No name",
            img: user.photoURL ? user.photoURL : 'https://freesvg.org/img/abstract-user-flat-3.png',
            email: user.email
        }
        console.log(review);
    }

    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="text-center w-full">
                <h1 className="text-4xl font-bold bg-amber-200 my-4 rounded-xl text-center py-3">Details</h1>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <h2 className="text-xl font-bold text-amber-600 ">Cost:{price}</h2>
                    </div>
                </div>
            </div>
            <div className="text-center w-full">
                <h1 className="text-4xl font-bold bg-amber-200 my-4 rounded-xl text-center py-3">Reviews</h1>
                {
                    user?.uid ?
                        <form onSubmit={handleSubmit}>
                            <textarea name='text' className="textarea textarea-warning w-full" placeholder="Add Your Review"></textarea>
                            <input className='btn btn-warning w-1/2' type="submit" value="Submit" />
                        </form>
                        :
                        <Link to='/signin' state={{ from: location }} replace><div className="alert bg-slate-500 text-white shadow-lg ">
                            <span className='mx-auto'>Please Sign in to add a review</span>
                        </div>
                        </Link>
                }
            </div>
        </div>
    );
};

export default ServicesDetails;