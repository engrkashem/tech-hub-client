import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/NotFound/NotFound.css';

const NotFound = () => {
    //Vanilla CSS is scripted on NotFound.css file

    const navigate = useNavigate();
    return (
        <div className='not-found-container' >
            <h2 className='not-found-text relative text-6xl text-rose-600 font-bold'>Route not Found</h2>
            <button onClick={() => navigate('/home')} className='not-found-text block mx-auto text-white bg-rose-600 relative w-44' >BACK TO HOME</button>
        </div>
    );
};

export default NotFound;