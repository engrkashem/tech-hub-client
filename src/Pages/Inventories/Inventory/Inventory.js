import React from 'react';
import useGetStock from '../../../hooks/useGetProducts';
import TableComponent from '../TableComponent/TableComponent';
import '../../../Styles/Inventory/Inventory.css'
import AddItemButton from '../AddItemButton/AddItemButton';
import Loader from '../../Shared/Loader/Loader';

const Inventory = () => {
    const url = `https://protected-ridge-43119.herokuapp.com/inventory`;
    // const url = `http://localhost:5000/inventory`;
    const [products, setProducts] = useGetStock(url);
    if (!products.length) {
        return <Loader></Loader>
    }

    const handleDelete = async id => {
        // console.log(id)
        const confirmation = window.confirm('Are You sure!! Want to delete this itemn???');
        if (confirmation) {
            // console.log(id)
            const url = `https://protected-ridge-43119.herokuapp.com/products/${id}`;
            // const url = `http://localhost:5000/products/${id}`;

            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        const restProducts = products.filter(p => p._id !== id);
                        setProducts(restProducts);
                    }
                })
        }

    }

    return (
        <div className='inventory-container'>
            <h2 className=' text-center text-5xl title-shadows py-10 mb-5 text-rose-600'>MANAGE INVENTORY</h2>
            <div className='button-container flex justify-end mb-5'>
                <AddItemButton></AddItemButton>
            </div>
            <TableComponent
                key={'1'}
                products={products}
                handleDelete={handleDelete}
            ></TableComponent>

        </div>
    );
};

export default Inventory;