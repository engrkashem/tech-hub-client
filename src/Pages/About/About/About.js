import React from 'react';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PhoneIcon from '@mui/icons-material/Phone';
import DraftsIcon from '@mui/icons-material/Drafts';

const About = () => {
    return (
        <div className=' h-[100vh] flex justify-center items-center'>
            <div className=' h-3/4 bg-cyan-900 p-5 rounded-md flex flex-col items-center justify-center'>
                <h1 className=' text-center font-bold text-4xl'>We Are Ready to Discuss Everything in Person or at a Meeting</h1>
                <div className='grid grid-cols-1 sm:grid-cols-3 mt-10 text-slate-300'>
                    <div className='flex items-center justify-center gap-5'>
                        <ImportContactsIcon fontSize='large' className=' text-rose-600 '></ImportContactsIcon>
                        <div>
                            <h3>Address</h3>
                            <p>2130 Fulton Street San Diego, CA 94117-1080 USA</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <PhoneIcon fontSize='large' className=' text-rose-600'></PhoneIcon>
                        <div>
                            <h3>Phone</h3>
                            <p>(123) 456-7890</p>
                            <p>(123) 456-7891</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <DraftsIcon fontSize='large' className=' text-rose-600'></DraftsIcon>
                        <div>
                            <h3>Email</h3>
                            <p>contact@tech-hub.com</p>
                            <p>www.tech-hub.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;