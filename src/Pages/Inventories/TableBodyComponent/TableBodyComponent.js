import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';



const TableBodyComponent = ({ product, handleDelete }) => {
    //for vanilla css go to ProductCard.css file
    const { name, img, quantity, _id } = product;

    const navigate = useNavigate();

    const handleDeleteBtn = id => {
        handleDelete(id);
    }

    // console.log(name, img, quantity)
    return (
        <TableRow>
            <TableCell >
                <div className='flex items-center justify-between'>
                    < img className=' w-10 h-10 rounded-full mr-2' src={img} alt='' /> {name}
                </div>
            </TableCell>
            <TableCell align='center'>{quantity}</TableCell>
            <TableCell><button onClick={() => navigate(`/inventory/${_id}`)} className="buy--btn w-full m-auto bg-rose-600">Manage <UpdateIcon /></button></TableCell>
            <TableCell><div onClick={() => handleDeleteBtn(_id)} title='Delete This Item' className=' flex items-center justify-center h-12 w-12 bg-rose-200 rounded-full'><DeleteForeverIcon className=' text-red-600' fontSize='large' /></div></TableCell>
        </TableRow>
    );
};

export default TableBodyComponent;