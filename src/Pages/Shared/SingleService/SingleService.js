import React from 'react';

const SingleService = ({ service }) => {
    
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description.slice(0, 100)}...</p>
                <h2 className="text-xl font-bold text-amber-600 w-1/2">Cost:{service.price}</h2>
                <div className="card-actions">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;