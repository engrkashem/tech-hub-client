import React from 'react';
import '../../../Styles/Warehouse/Warehouse.css';
import warehouse from '../../../images/warehouse/warehouse .jpg';

const Warehouse = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-10 bg-[#ecf0f3] pt-20'>
            <div className='order-1 sm:order-2'>
                <img className=' w-full h-[300px] rounded-full' src={warehouse} alt="" />
            </div>
            <div className='order-2 sm:order-1 flex items-center'>
                <p className=' text-xl'>Our Warehouse is Equipt with modern storing and handling system. More than 1 Million product can be stored at once.</p>
            </div>
        </div>
    );
};

export default Warehouse;