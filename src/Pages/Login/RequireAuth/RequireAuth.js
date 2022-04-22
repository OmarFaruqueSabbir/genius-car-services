import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification,sending,error] = useSendEmailVerification(auth);
    if(loading){
        return <Loading />
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace />
    }
    if(user.providerData[0].providerId === 'pasword' && !user.emailVerified){
        return <div>
            <h3 className='text-danger'>Your email is</h3>
            <h5 className='text-success'>Please verify your mail</h5>
            <button className='btn btn-primary'
                onClick={async () =>{
                    await sendEmailVerification();
                    toast('sent mail');
                }}>
                    send verify email again
            </button>
            <ToastContainer />
        </div>
    }
    return children;

};

export default RequireAuth;