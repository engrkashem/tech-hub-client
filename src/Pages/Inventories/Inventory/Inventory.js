import React from 'react';
import useGetStock from '../../../hooks/useGetProducts';
import TableComponent from '../TableComponent/TableComponent';
import '../../../Styles/Inventory/Inventory.css'
import AddItemButton from '../AddItemButton/AddItemButton';

const Inventory = () => {
    // const url = `https://protected-ridge-43119.herokuapp.com/inventory`;
    const url = `http://localhost:5000/inventory`;
    const [products] = useGetStock(url);

    return (
        <div className='inventory-container'>
            <h2 className=' text-center text-5xl title-shadows py-10 mb-5 text-rose-600'>MANAGE INVENTORY</h2>
            <div className='button-container flex justify-end mb-5'>
                <AddItemButton></AddItemButton>
            </div>
            <TableComponent
                key={'1'}
                products={products}
            ></TableComponent>

        </div>
    );
};

export default Inventory;