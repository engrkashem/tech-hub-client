import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../../images/logoes/icons-google.png'

const Register = () => {
    return (
        <div className='login-container' >
            <div className="container">
                <form>
                    <span className="text">Register</span>
                    <div className="inputs">
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Register</button>
                    </div>
                </form>
                <h5 className=' text-gray-500 mt-5'>Already Registered? <Link className=' text-blue-600 font-medium' to={'/login'}>Login</Link></h5>

                <button className='flex items-center justify-center'><img width={'40px'} src={google} alt="google logo" /> <span className=' ml-5'>Google Login</span></button>
            </div>
        </div>
    );
};

export default Register;