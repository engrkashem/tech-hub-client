import React from 'react';
import { useParams } from 'react-router-dom';
import useGetStock from '../../../hooks/useGetProducts';
import ProductCard from '../../Home/ProductCard/ProductCard';

const ItemDetails = () => {
    const { id } = useParams();
    const url = `https://protected-ridge-43119.herokuapp.com/inventory/${id}`;
    const [product, setProduct] = useGetStock(url);

    // console.log(product)
    const handleDeliveredBtn = () => {
        const url = `http://localhost:5000/inventory/${id}`;
        const newProduct = { ...product }
        const qty = newProduct.quantity;
        const newQty = parseInt(qty) - 1;
        newProduct.quantity = newQty;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        setProduct(newProduct)

    }

    return (
        <div className=' py-8 px-20'>
            <ProductCard
                key={product._id}
                product={product}
                handleDeliveredBtn={handleDeliveredBtn}
            ></ProductCard>
        </div>
    );
};

export default ItemDetails;