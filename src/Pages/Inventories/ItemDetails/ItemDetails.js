import React from 'react';
import { useParams } from 'react-router-dom';
import useGetStock from '../../../hooks/useGetProducts';
import ProductCard from '../../Home/ProductCard/ProductCard';

const ItemDetails = () => {
    const { id } = useParams();
    const url = `https://protected-ridge-43119.herokuapp.com/inventory/${id}`;
    const [product] = useGetStock(url);
    console.log(product)

    return (
        <div className=' py-8 px-20'>
            <ProductCard
                key={product._id}
                product={product}
            ></ProductCard>
        </div>
    );
};

export default ItemDetails;