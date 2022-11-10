import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneSquare } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className='my-8'>
            <h2 className='text-4xl font-semibold text-center mb-4 p-4 border-4 border-indigo-200 border-b-indigo-500' >Contact US</h2>
            <div className="flex justify-between">
            <div className="card w-96 bg-base-100 shadow-xl bg-indigo-200">
                <div className="card-body">
                    <h2 className="card-title justify-center text-8xl"><FaMapMarkerAlt></FaMapMarkerAlt></h2>
                        <p>Sejuti tower (Floor 10/D), House # 15, Road # 17, Gulshan, Dhaka - 1213, Bangladesh</p>
                </div>
            </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-indigo-200">
                    <div className="card-body">
                        <h2 className="card-title justify-center text-8xl"><FaEnvelope></FaEnvelope></h2>
                        <p>hasan@yahoo.com</p>
                        <p>megnna.torist@yahoo.com</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-indigo-200">
                    <div className="card-body">
                        <h2 className="card-title justify-center text-8xl"><FaPhoneSquare></FaPhoneSquare></h2>
                        <p>+880 18527-58796</p>
                        <p>+880 18527-58797</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;