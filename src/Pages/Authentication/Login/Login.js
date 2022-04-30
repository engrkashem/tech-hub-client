import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Styles/Login/Login.css';
import google from '../../../images/logoes/icons-google.png'
import { Button } from '@mui/material';

const Login = () => {
    //vanilla CSS scripted on Login.css file
    return (
        <div className='login-container' >
            <div className="container">
                <form>
                    <span className="text">Login</span>
                    <div className="inputs">
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <Button type="submit">LOGIN</Button>
                    </div>
                </form>
                <h5 className=' text-gray-500 mt-5'>New to Tech Hub? <Link className=' text-blue-600 font-medium' to={'/register'}>Register</Link></h5>
                <h5 className=' text-gray-500 mt-2 mb-8'>Forgot Password? <span className=' text-blue-600 font-medium cursor-pointer' >Reset</span></h5>
                <Button ><img width={'40px'} src={google} alt="google logo" /> <span className=' ml-5 font-medium'>Google Login</span></Button>

            </div>
        </div>
    );
};

export default Login;