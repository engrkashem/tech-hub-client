import React from 'react';
import { Link } from 'react-router-dom';
import useGetStock from '../../../hooks/useGetProducts';
import Banner from '../Banner/Banner';
import ProductCard from '../ProductCard/ProductCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Loader from '../../Shared/Loader/Loader';
import Warehouse from '../Warehouse/Warehouse';
import SearchSec from '../SearchSec/SearchSec';

const Home = () => {
    const url = `https://protected-ridge-43119.herokuapp.com/products`;
    // const url = `http://localhost:5000/products`;
    const [products] = useGetStock(url);
    if (!products.length) {
        return <Loader></Loader>
    }

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
                <div className=' text-right pb-5'>
                    <Link className=' text-rose-700 text-lg font-medium bg-rose-100 p-2 mr-12 rounded-full' to={'/inventory'}>Manage Inventories <ArrowForwardIcon /> </Link>
                </div>
            </div>
            <Warehouse></Warehouse>
            <SearchSec></SearchSec>
        </div>
    );
};

export default Home;