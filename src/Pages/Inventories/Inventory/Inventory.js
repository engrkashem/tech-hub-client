import React from 'react';
import useGetStock from '../../../hooks/useGetProducts';
import TableComponent from '../TableComponent/TableComponent';

const Inventory = () => {
    const url = `https://protected-ridge-43119.herokuapp.com/inventory`;
    const [products] = useGetStock(url);

    return (
        <div>
            <h2>Manage Inventory:</h2>
            <TableComponent
                key={'1'}
                products={products}
            ></TableComponent>

        </div>
    );
};

export default Inventory;