import { Button } from '@mui/material';
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
            {error ? <h6 className='text-red-700 my-4'>{errorMessage}</h6> : ''}
            <Button onClick={() => signInWithGoogle()} ><img width={'40px'} src={google} alt="google logo" /> <span className=' ml-5'>Google Login</span></Button>
        </div>

    );
};

export default SocialLogin;