import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user, loading } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);
    // if (loading){
    //     return <p>loading</p>
    // }
    return (
        <div>
            <table class=" table-auto bg-orange-100 table-zebra">
                <thead>
                    <tr>
                        <th className='p-4'></th>
                        <th className='p-4'>Service Name</th>
                        <th className='p-4'>Reviews</th>
                        <th className='p-4'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map((review, index) => <tr key={index}>
                            <th className='p-4'>{index + 1}</th>
                            <td className='p-4 font-bold'>{review.serviceName}</td>
                            <td className='p-4'>{review.text}</td>
                            <td className='p-4'>
                                <button className='text-2xl text-blue-700'><FaEdit></FaEdit></button> 
                                <button className='text-2xl text-red-700'><FaTrash></FaTrash></button>
                            </td>
                        </tr>
                        )}
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;