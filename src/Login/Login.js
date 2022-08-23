import React, { useState } from 'react';
import './Login.css'
import { Link} from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }

    const register = e => {

    }

    return (
        <div className=' bg-white h-screen flex flex-col items-center'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StorefrontIcon className="flex mx-2 text-orange-400" fontSize="large" />
                    <h2 className="font-bold mt-1">eSHOP</h2>
                </div>
            </Link>

            <div className=' w-[300px] h-fit flex flex-col  border border-solid border-black p-5'>
                <h1 className='font-bold mb-3'>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input className='border w-full' type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input className='border w-full' type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='bg-amber-600 w-full p-2 rounded  font-bold mt-3' onClick={signIn}>Sign In</button>
                </form>

                <p className='mt-2 text-xs'>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='border border-black p-1 mt-2 text-xs' onClick={register}>Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login;