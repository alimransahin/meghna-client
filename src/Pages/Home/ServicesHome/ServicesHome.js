import React, { useEffect, useState } from 'react';
import SingleService from '../../Shared/SingleService/SingleService';

const ServicesHome = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/servicesHome')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
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

export default ServicesHome;