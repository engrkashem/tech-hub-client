import React from 'react';
import { useParams } from 'react-router-dom';
import useGetStock from '../../../hooks/useGetProducts';
import UpdateStock from '../../Shared/UpdateStock/UpdateStock';
import ProductCard from '../../Home/ProductCard/ProductCard';
import { toast } from 'react-toastify';

const ItemDetails = () => {
    const { id } = useParams();
    // console.log(id)
    // const url = `https://protected-ridge-43119.herokuapp.com/inventory/${id}`;
    const url = `http://localhost:5000/inventory/${id}`;
    const [product, setProduct] = useGetStock(url);

    // console.log(product)
    const handleDeliveredBtn = async (id) => {
        // const url = `https://protected-ridge-43119.herokuapp.com/inventory/${id}`;
        const newProduct = { ...product }
        const qty = newProduct.quantity;
        const newQty = parseInt(qty) - 1;
        if (newQty >= 0) {
            newProduct.quantity = newQty;
            await UpdateStock(url, newProduct);
            setProduct(newProduct);
            toast('Product of ONE Quantity is delivered from warehouse.');
        }
        else {
            toast('Stock Can not be Negative in value.')
        }
    }

    const handleUpdateStock = async (id, addedQty) => {
        // const url = `https://protected-ridge-43119.herokuapp.com/inventory/${id}`;
        const newProduct = { ...product }
        const qty = newProduct.quantity;
        const newQty = parseInt(qty) + parseInt(addedQty);
        if (newQty >= 0) {
            newProduct.quantity = newQty;
            await UpdateStock(url, newProduct);
            setProduct(newProduct);
            toast('Stock is Updated');
        }
        else {
            toast('Stock quantity can not be Negative.');
        }

    }

    return (
        <div className=' py-8 px-20'>
            <ProductCard
                key={product._id}
                product={product}
                handleDeliveredBtn={handleDeliveredBtn}
                handleUpdateStock={handleUpdateStock}
            ></ProductCard>
        </div>
    );
};

export default ItemDetails;