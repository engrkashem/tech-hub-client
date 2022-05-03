import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import TableBodyComponent from '../TableBodyComponent/TableBodyComponent';

const TableComponent = ({ products }) => {


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ITEMS</TableCell>
                        <TableCell align="center">QUANTITY</TableCell>
                        <TableCell align="center">MANAGE STOCK</TableCell>
                        <TableCell align="center">DELETE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map(product => <TableBodyComponent
                            key={product._id}
                            product={product}
                        ></TableBodyComponent>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;