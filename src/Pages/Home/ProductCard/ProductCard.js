import React from 'react';
import '../../../Styles/ProductCard/ProductCard.css';

const ProductCard = ({ product }) => {
    const { name, img, description, price, quantity, supplier } = product;
    console.log(product)
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
                    <span>Supplier: {supplier}</span>
                </div>
                <div className="price">
                    $ <span>{price}++</span>
                </div>
                <div className="description">
                    <h4>STOCK: {quantity}</h4>
                    <h3>DESCRIPTION</h3>
                    <p>{description.slice(0, 30)}...</p>
                </div>
                <button className="buy--btn">REVIEW STOCK</button>
            </div>
        </section>
    );
};

export default ProductCard;