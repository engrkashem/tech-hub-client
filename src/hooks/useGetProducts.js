import axios from "axios";
import { useEffect, useState } from "react";


const useGetProducts = (url) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get(url)
            setProducts(data);
        }
        getProducts();
    }, [url])
    return [products, setProducts];
};

export default useGetProducts;