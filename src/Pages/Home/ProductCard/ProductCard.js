import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../Styles/ProductCard/ProductCard.css';

const ProductCard = ({ product, handleDeliveredBtn }) => {
    const { name, img, description, price, quantity, supplier, _id } = product;
    const navigate = useNavigate();
    const pageRoute = window.location.pathname;
    const quantityRef = useRef('');
    // console.log(product)


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
                            <h4>STOCK: {quantity}</h4> : 'SOLD'
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
                        <button onClick={() => navigate(`/inventory/${_id}`)} className="buy--btn w-3/4 m-auto">REVIEW STOCK</button> :
                        <>
                            <button onClick={() => handleDeliveredBtn(_id)} className="buy--btn w-1/4 m-auto ">DELIVERED</button>
                            <div className=' flex items-center justify-center gap-5 mt-8'>
                                <input ref={quantityRef} className=' w-1/4 my-0' placeholder='Quantity'></input>
                                <button onClick={() => console.log(quantityRef.current.value)} className='buy--btn w-1/4 my-0'>UPDATE STOCK</button>
                            </div>
                        </>
                }
            </div>
        </section>
    );
};

export default ProductCard;