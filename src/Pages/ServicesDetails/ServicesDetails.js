import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const service = useLoaderData();
    const { _id, img, price, title, description}=service
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
                </div>
            </div>
    );
};

export default ServicesDetails;