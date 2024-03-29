import React, { useEffect, useState } from 'react';
import SingleService from '../../Shared/SingleService/SingleService';
import { Link } from 'react-router-dom';

const ServicesHome = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://meghna-tourist-service-server-alimransahin.vercel.app/servicesHome')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-8'>
            <h2 className='text-4xl font-semibold text-center mb-4 p-4  drop-shadow-lg shadow-lg bg-base-200 rounded-lg' >Services</h2>
            <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    services.map(service => <SingleService
                    key={service._id}
                    service={service}
                    ></SingleService>)
                }

            </div>
            <div className="text-end">
                <Link to='/services' className="btn my-4">See All  </Link>
            </div>
        </div>
    );
};

export default ServicesHome;