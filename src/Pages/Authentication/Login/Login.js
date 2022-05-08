import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../../Styles/Login/Login.css';
import { Button } from '@mui/material';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader/Loader';
import axios from 'axios';

const Login = () => {
    //vanilla CSS scripted on Login.css file

    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
        sending,
        errorReset] = useSendPasswordResetEmail(
            auth
        );

    if (user) {
        // console.log(user);

    }

    let errorMessage;
    if (error || errorReset) {
        errorMessage = error?.message;
        errorMessage = errorReset?.message;
    }

    if (loading || sending) {
        return <Loader></Loader>
    }

    const handleLoginSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const url = `https://protected-ridge-43119.herokuapp.com/login`;
        const { data } = await axios.post(url, { email });
        localStorage.setItem('JWT_Token', data?.token);
        navigate(from, { replace: true });
        console.log(data)

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password Reset Email has been sent.');
        }
        else {
            toast('Ooops!! Forgot rendering Email address. Please Enter Your Email Address');
        }

    }

    return (
        <div className='login-container' >
            <div className="container">
                <form onSubmit={handleLoginSubmit}>
                    <span className="textH">Login</span>
                    <div className="inputs">
                        <input ref={emailRef} type="email" placeholder="Email" required />
                        <input ref={passRef} type="password" placeholder="Password" required />
                        {
                            error ? <h6 className=' text-red-700 my-4'>{errorMessage}</h6> : ''
                        }
                        <Button type="submit">LOGIN</Button>
                    </div>
                </form>
                <h5 className=' text-gray-500 mt-5'>New to Tech Hub? <Link className=' text-blue-600 font-medium' to={'/register'}>Register</Link></h5>
                <h5 className=' text-gray-500 mt-2 mb-8'>Forgot Password? <span onClick={resetPassword} className=' text-blue-600 font-medium cursor-pointer' >Reset</span></h5>
                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Login;