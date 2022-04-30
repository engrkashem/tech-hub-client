import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Styles/Login/Login.css';
import google from '../../../images/logoes/icons-google.png'

const Login = () => {
    //vanilla CSS scripted on Login.css file
    return (
        <div className='login-container' >
            <div className="container">
                <form>
                    <span className="text">Login</span>
                    <div className="inputs">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">LOGIN</button>
                    </div>
                </form>
                <h5 className=' text-gray-500 mt-5'>New to Tech Hub? <Link className=' text-blue-600 font-medium' to={'/register'}>Register</Link></h5>
                <h5 className=' text-gray-500 mt-2'>Forgot Password? <Link className=' text-blue-600 font-medium' to={'/register'}>Reset</Link></h5>
                <button className='flex items-center justify-center'><img width={'40px'} src={google} alt="google logo" /> <span className=' ml-5'>Google Login</span></button>
            </div>
        </div>
    );
};

export default Login;