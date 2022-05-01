import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/logoes/icons-google.png';


const SocialLogin = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorMessage;
    if (error) {
        errorMessage = error?.message;


    }
    if (user) {
        console.log(user)
        navigate('/home')
    }
    if (loading) {
        return <p>Loading....</p>
    }

    return (
        <div>
            {error ? <h6 className='text-red-700'>{errorMessage}</h6> : ''}
            <button onClick={() => signInWithGoogle()} className='flex items-center justify-center'><img width={'40px'} src={google} alt="google logo" /> <span className=' ml-5'>Google Login</span></button>
        </div>

    );
};

export default SocialLogin;