import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    //vanilla CSS scripted on Login.css file

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const conPassRef = useRef('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, errorUpPro] = useUpdateProfile(auth);


    if (user) {
        console.log(user);
        navigate('/home');
    }

    if (loading || updating) {
        return <p>Loading....</p>
    }

    let errorMessage;
    if (error || errorUpPro) {
        errorMessage = error?.message;
        errorMessage = errorUpPro?.message;
    }

    const handleRegisterSubmit = async e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const conPassword = conPassRef.current.value;
        console.log(email, password, conPassword)
        if (password === conPassword) {
            await createUserWithEmailAndPassword(email, password);

        }
        else {
            toast('Your Passwords did not matched. Please enter password & confirm password.')
        }
        await updateProfile({ displayName: name });
    }

    return (
        <div className='login-container' >
            <div className="container my-5">
                <form onSubmit={handleRegisterSubmit}>
                    <span className="textH">Register</span>
                    <div className="inputs">
                        <input ref={nameRef} type="text" placeholder="Name" required />
                        <input ref={emailRef} type="email" placeholder="Email" required />
                        <input ref={passRef} type="password" placeholder="Password" required />
                        <input ref={conPassRef} type="password" placeholder="Confirm Password" required />
                        {
                            error ? <h6 className=' text-red-700 my-4'>{errorMessage}</h6> : ''
                        }
                        <button type="submit">Register</button>
                    </div>
                </form>
                <h5 className=' text-gray-500 my-8'>Already Registered? <Link className=' text-blue-600 font-medium' to={'/login'}>Login</Link></h5>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;