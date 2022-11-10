import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user, loading } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://meghna-tourist-service-server-alimransahin.vercel.app/my-reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`https://meghna-tourist-service-server-alimransahin.vercel.app/my-reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Review deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    return (
        <div className='min-h-96'>
            {
                reviews.length === 0 ?
                    <div className='min-h-full'>
                        <h2 className='text-center text-bold text-3xl text-amber-600 pt-24'>No review were added</h2>
                    </div>
                    :
                    <table className=" table-auto bg-orange-100 table-zebra">
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
                                        <button onClick={() => handleDelete(review._id)} className='text-2xl text-red-700'><FaTrash></FaTrash></button>
                                    </td>
                                </tr>
                                )}

                        </tbody>
                    </table>
            }
        </div>
    );
};

export default MyReviews;