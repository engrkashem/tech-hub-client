import React from 'react';
import '../../../Styles/SearchSec/SearchSec.css';

const SearchSec = () => {
    return (
        <div className='search-container flex items-center justify-center'>
            <div className='w-1/2 flex justify-center items-center p-0'>
                <input type="text" name="" id="" />
                <button className='w-20 m-0 text-rose-600 '>Seacrh</button>
            </div>
        </div>
    );
};

export default SearchSec;