import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user, loading, signOutUser } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('secret_token')}`
            }
        })
            .then(res => {
                if(res.status===401||res.status===403){
                    signOutUser()
                }
               return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, signOutUser]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/my-reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('secret_token')}`
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
    if (loading){
        return <div className="radial-progress text-primary text-center" style={{ "--value": 70 }}></div>
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