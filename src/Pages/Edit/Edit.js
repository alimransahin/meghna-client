import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {
    const review = useLoaderData();
    const { text,_id } = review;

    const handleUpdate = (event) => {
        event.preventDefault();
        const text = event.target.text.value;
        const review ={
            text:text,
            _id:_id
        };
        fetch(`https://meghna-tourist-service-server-alimransahin.vercel.app/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('secret_token')}`
               
            },
            body: JSON.stringify(review)
        })
            .then(()=>{
                event.target.reset();
                alert('Your Review Updated');
            }
                )
            .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleUpdate}>
            <textarea name='text' defaultValue={text} className="textarea textarea-warning w-full" placeholder="Add Your Review"></textarea>
            <input className='btn btn-warning w-full' type="submit" value="Update" />
        </form>
    );
};

export default Edit;