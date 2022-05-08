import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
// import useGetStock from '../../../hooks/useGetProducts';
import Loader from '../../Shared/Loader/Loader';
import TableComponent from '../TableComponent/TableComponent';



const MyItems = () => {
    const [myProducts, setMyProducts] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        const url = `https://protected-ridge-43119.herokuapp.com/productByEmail?email=${email}`;
        // const url = `http://localhost:5000/productByEmail?email=${email}`;
        const getData = async () => {
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('JWT_Token')}`
                    }
                });
                setMyProducts(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getData();
    }, [user])

    if (!myProducts.length) {
        return <Loader></Loader>
    }

    const handleDelete = async id => {
        const confirmation = window.confirm('Do You Want to Delete ? Sure!!');
        if (confirmation) {
            const url = `https://protected-ridge-43119.herokuapp.com/products/${id}`;
            // const url = `http://localhost:5000/products/${id}`;

            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        const restProducts = myProducts.filter(p => p._id !== id);
                        setMyProducts(restProducts);
                    }
                })

        }
    }


    return (
        <div>
            <h2 className=' text-center text-5xl title-shadows py-10 mb-5 text-rose-600'>MY ITEMS ({myProducts.length})</h2>
            <TableComponent
                key={'2'}
                products={myProducts}
                handleDelete={handleDelete}
            ></TableComponent>
        </div>
    );
};

export default MyItems;