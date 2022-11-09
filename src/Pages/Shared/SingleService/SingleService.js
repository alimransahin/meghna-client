import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <PhotoProvider>
                    <PhotoView src={service.img} >
                    <img src={service.img} alt="Shoes" className="rounded-xl" />
                    </PhotoView>
                    </PhotoProvider>
                
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description.slice(0, 100)}...</p>
                <h2 className="text-xl font-bold text-amber-600 w-1/2">Cost:{service.price}</h2>
                <div className="card-actions">
                    <Link to={`/services/${service._id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;