import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/NotFound/NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found-container' >
            <h2 className='not-found-text inline relative top-1/2 text-4xl text-red-500 font-bold'>Page not Found</h2>
            <button onClick={() => navigate('/home')} className='not-found-text text-black relative top-1/2 w-44' >BACK TO HOME</button>
        </div>
    );
};

export default NotFound;