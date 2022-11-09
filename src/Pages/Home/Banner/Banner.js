import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [bannerItems, setBannerItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setBannerItems(data))
    }, [])
    return (
        <div>
            <div className="carousel w-full max-h-96	">
                {
                    bannerItems.map(bannerItem => <div
                        key={bannerItem._id} id={bannerItem._id} className="carousel-item w-full">
                        <img src={bannerItem.img} className="w-full " alt={bannerItem.title} />
                    </div>
                    )
                }

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    bannerItems.map((bannerItem,index) => <a href={`#${bannerItem._id}`} className="btn btn-xs" key={bannerItem._id}>{index+1}</a>)
                }
            </div>
        </div>
    );
};

export default Banner;