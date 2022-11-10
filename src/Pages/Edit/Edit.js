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
        }
    }

    return (
        <form onSubmit={handleUpdate}>
            <textarea name='text' defaultValue={text} className="textarea textarea-warning w-full" placeholder="Add Your Review"></textarea>
            <input className='btn btn-warning w-full' type="submit" value="Update" />
        </form>
    );
};

export default Edit;