import React, { useEffect, useState } from 'react';
import SingleService from '../Shared/SingleService/SingleService';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://meghna-tourist-service-server-alimransahin.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-4xl font-semibold bg-orange-200 py-2'>All Services</h2>
            <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }

            </div>
        </div>
    );
};

export default Service;