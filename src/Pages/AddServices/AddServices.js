import React from 'react';

const AddServices = () => {
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const title=form.title.value;
        const imgUrl=form.imgUrl.value;
        const description=form.description.value;
        const price=form.price.value;
        const addService={
            title: title,
            description:description,
            img:imgUrl,
            price: price
        };
        console.log(addService);
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'git add .
                application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(() => {
                form.reset();
                alert('Your Service Added');
            }
            )
            .catch(err => console.error(err))
    }
    return (
        <div className="hero bg-base-200">
            <div className="card w-full max-w-md m-16 shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name='title' placeholder="Title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Img Url</span>
                        </label>
                     <input type="text" name='imgUrl' placeholder="Img Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" name='description' placeholder="Description" className="textarea textarea-bordered"></textarea>
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign In" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;