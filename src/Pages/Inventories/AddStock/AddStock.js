import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddStock = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (product, event) => {
        // console.log(product)
        const url = `https://tech-hub-warehouse.onrender.com/products`;
        // const url = `https://protected-ridge-43119.herokuapp.com/products`;
        // const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast('Product added to the Database.');
                event.target.reset()
            })

    };

    return (
        <div className=' py-10 ' >
            <div className="container mx-auto ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span className="textH">ADD NEW STOCK</span>
                    <div className="inputs">
                        <input placeholder='Name' {...register("name", { required: true })} />
                        <input placeholder='Price' {...register("price", { required: true })} />
                        <input placeholder="Quantity" {...register("quantity", { required: true })} />
                        <input value={email} readOnly placeholder="Email" {...register("email", { required: true })} />
                        <input placeholder="Product Description" {...register("description", { required: true })} />
                        <input placeholder="Supplier" {...register("supplier", { required: true })} />
                        <input placeholder="Image URL" {...register("img", { required: true })} />
                        <input placeholder="Category" {...register("category", { required: true })} />
                        {(errors.name || errors.price || errors.quantity || errors.email || errors.description || errors.supplier || errors.img || errors.category) ? <span className=' text-red-600'>This field is required</span> : ''}

                        <button type="submit" >ADD TO STOCK</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddStock;