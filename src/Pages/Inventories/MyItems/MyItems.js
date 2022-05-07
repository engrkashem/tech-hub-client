import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useGetStock from '../../../hooks/useGetProducts';
import TableComponent from '../TableComponent/TableComponent';



const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `https://protected-ridge-43119.herokuapp.com/productByEmail?email=${email}`;
    // const url = `http://localhost:5000/productByEmail?email=${email}`;
    const [myProducts, setMyProducts] = useGetStock(url);

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
            <h2>My Item: {myProducts.length}</h2>
            <TableComponent
                key={'2'}
                products={myProducts}
                handleDelete={handleDelete}
            ></TableComponent>
        </div>
    );
};

export default MyItems;