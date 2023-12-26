import React, { useEffect, useState } from 'react';
import SingleService from '../Shared/SingleService/SingleService';

const Service = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://meghna-tourist-service-server-alimransahin.vercel.app/services')
            .then(res => res.json())
            .then(data =>{setServices(data);setLoading(false);})
            
    }, [])
    if (loading) {
        return <div className='text-center'>
        <button type="button" disabled>
            <img src="http://i.ibb.co/HxzcfmF/Rolling-1-5s-71px.gif" alt="" />
            Processing...
        </button>
        </div>

    }
    return (
        <div>
            <h2 className='text-center text-4xl font-semibold bg-orange-200 py-2'>All Services</h2>
            <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
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