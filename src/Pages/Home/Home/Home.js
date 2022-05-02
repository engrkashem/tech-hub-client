import React from 'react';
import useGetStock from '../../../hooks/useGetProducts';
import Banner from '../Banner/Banner';
import ProductCard from '../ProductCard/ProductCard';

const Home = () => {
    const url = `https://protected-ridge-43119.herokuapp.com/products`;
    const [products] = useGetStock(url);

    return (
        <div>
            <Banner></Banner>
            <div className='card-container'>
                <h1 className='title-shadows text-center text-5xl font-medium text-red-500 pt-10'>STOCK PRODUCTS</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-10'>
                    {
                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;