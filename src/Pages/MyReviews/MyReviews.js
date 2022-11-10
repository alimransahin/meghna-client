import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const {user}=useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/review/${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);
    return (
        <div>
            
        </div>
    );
};

export default MyReviews;