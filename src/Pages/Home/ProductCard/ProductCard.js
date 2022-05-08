import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../Styles/ProductCard/ProductCard.css';
import UpdateIcon from '@mui/icons-material/Update';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ProductCard = ({ product, handleDeliveredBtn, handleUpdateStock }) => {
    const { name, img, description, price, quantity, supplier, _id } = product;
    const navigate = useNavigate();
    const pageRoute = window.location.pathname;
    const quantityRef = useRef('');

    // console.log(qty)

    const handleUpdateStockBtn = id => {
        const qty = quantityRef.current.value;
        handleUpdateStock(id, qty)
    }

    // console.log(product)
    return (
        <section className="product">
            <div className="product__photo">
                <div className="photo-container">
                    <div className="photo-main">
                        <img src={img} alt="green apple slice" />
                    </div>
                </div>
            </div>
            <div className="product__info">
                <div className="title">
                    <h1>{name}</h1>
                    {
                        (pageRoute === '/') ?
                            '' : <span>Product ID: {_id}</span>

                    }
                    <br />
                    <span>Supplier: {supplier}</span>
                </div>
                <div className="price">
                    $ <span>{price}++</span>
                </div>
                <div className="description">
                    {
                        quantity ?
                            <h4 className=' text-xl font-medium'>STOCK: <span className=' text-3xl font-bold'>{quantity}</span></h4> : 'SOLD'
                    }
                    <h3 className=' font-semibold'>DESCRIPTION:</h3>
                    {
                        (pageRoute === '/') ?
                            <p>{description?.slice(0, 20)}...</p> :
                            <p>{description}...</p>
                    }
                </div>
                {
                    (pageRoute === '/') ?
                        <button onClick={() => navigate(`/inventory/${_id}`)} className="buy--btn w-full m-auto bg-rose-600">REVIEW STOCK <InventoryIcon /></button> :
                        <>
                            <button onClick={() => handleDeliveredBtn(_id)} className="buy--btn w-2/5 m-auto bg-rose-600">DELIVERED <LocalShippingIcon /></button>
                            <div className=' flex items-center justify-center gap-5 my-8'>
                                <input ref={quantityRef} className=' w-1/2 my-0' placeholder='Quantity (+n to add, -n to delivery)'></input>
                                <button onClick={() => handleUpdateStockBtn(_id)} className='buy--btn w-1/2 my-0 bg-rose-600'>UPDATE STOCK <UpdateIcon /></button>
                            </div>
                            <div className=' text-right pb-5'>
                                <Link className=' text-rose-700 text-lg font-medium bg-rose-100 p-2 rounded-full' to={'/inventory'}>Manage Inventories <ArrowForwardIcon /> </Link>
                            </div>
                        </>
                }
            </div>
        </section>
    );
};

export default ProductCard;