import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneSquare } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className='my-8'>
            <h2 className='text-4xl font-semibold text-center mb-4 p-4 drop-shadow-lg shadow-lg bg-base-200 rounded-lg' >Contact US</h2>
            <div className="flex justify-between">
            <div className="card w-96 shadow-xl bg-indigo-200">
                <div className="card-body">
                    <h2 className="card-title justify-center text-8xl"><FaMapMarkerAlt></FaMapMarkerAlt></h2>
                        <a href='https://maps.app.goo.gl/Jx2guFjj6Y2hvr8y8'>Sejuti tower (Floor 10/D), House # 15, Road # 17, Gulshan, Dhaka - 1213, Bangladesh</a>
                </div>
            </div>
                <div className="card w-96 shadow-xl bg-indigo-200">
                    <div className="card-body">
                        <h2 className="card-title justify-center text-8xl"><FaEnvelope></FaEnvelope></h2>
                        <a href='mailto:hasan@yahoo.com'>hasan@yahoo.com</a>
                        <a href='mailto:hasan@yahoo.com'>megnna.torist@yahoo.com</a>
                        
                    </div>
                </div>
                <div className="card w-96 shadow-xl bg-indigo-200">
                    <div className="card-body">
                        <h2 className="card-title justify-center text-8xl"><FaPhoneSquare></FaPhoneSquare></h2>
                        <a href='tel:+880 18527-58796'>+880 18527-58796</a>
                        <a href='tel:+880 18527-58797'>+880 18527-58797</a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;