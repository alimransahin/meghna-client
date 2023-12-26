import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [bannerItems, setBannerItems] = useState([]);
    useEffect(() => {
        fetch('https://meghna-tourist-service-server-alimransahin.vercel.app/services')
            .then(res => res.json())
            .then(data => setBannerItems(data.slice(0, 4)))
    }, [])
    return (
        <div>
            <div className="carousel w-full max-h-96">
                {
                    bannerItems.map(bannerItem => <div
                        key={bannerItem._id} id={bannerItem._id} className="carousel-item w-full">
                        <div className="card w-full bg-base-100 image-full">
                            <figure><img src={bannerItem.img} alt="Img" className='w-full' /></figure>
                            <div className="card-body ">
                                <h2 className="card-title text-center">{bannerItem.title}</h2>
                            </div>
                        </div>
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