import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/google.svg'
import fb from '../../../images/icons8-facebook.svg'
import gh from '../../../images/icons8-github.svg'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;

    if(loading || loading1){
        return <Loading />
    }

    if (error || error1) {
        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if(user || user1){
        navigate('/home')
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'>
                </div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'>
                </div>
            </div>
            {
                errorElement
            }
            <div className=''>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark d-block mx-auto mb-3 w-50 '><img src={logo} alt="" /><span className='px-2'>Google Sign In</span>
                </button>

                <button className='btn btn-dark d-block mx-auto mb-3 w-50'><img style={{ width: '33px' }} src={fb} alt="" /><span className='px-2'>Facebook Sign In</span>
                </button>

                <button onClick={() => signInWithGithub()} className='btn btn-dark d-block mx-auto w-50'><img src={gh} alt="" /><span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;