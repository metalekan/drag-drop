import React, { useState } from 'react'
import { FaAnglesRight } from 'react-icons/fa6';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [isInput, setIsInput] = useState(false)
    const navigate = useNavigate();
    const firebaseConfig = {
        apiKey: "AIzaSyA_nNo632SlzTZ0tkym9FMvWio5SkCDSvc",
        authDomain: "react-firebase-aug.firebaseapp.com",
        projectId: "react-firebase-aug",
        storageBucket: "react-firebase-aug.appspot.com",
        messagingSenderId: "143454018323",
        appId: "1:143454018323:web:a8ef2e14dbe57d0a5318e6",
    };

    const signInWithGoogle = () => {
        setLoading(true)
        {
            isInput ? setIsInput(false) : null
        }
        signInWithPopup(auth, provider)
            .then((result) => {
                const name = result.user.displayName;
                const email = result.user.email;
                
                console.log(name, email)
                setTimeout(() => {
                    navigate("/gallery")
                }, 2000)
            })
            .catch((error) => {
                setLoading(false)
                const errorCode = error.code;
            });
    };
    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = (e) => {
        e.preventDefault();
        if (email == "user@example.com" && password == "1Password") {
            setLoading(true)
            setIsInput(false)
            setTimeout(() => {
                navigate("/gallery")
            }, 2000)
        } else {
            setLoading(true)
            setTimeout(() => {
                setIsInput(true);
                setLoading((prev) => !prev)
            }, 2000)
        }
    }

    return (
        <div className="p-4 rounded-xl bg-gray-200 text-white w-[80%] lg:w-[30%]  shadow-2xl animate__animated animate__zoomIn">
            <h1 className='text-xl font-bold text-center'>Login</h1>
            <form className='flex flex-col mt-8 gap-3' action="" onSubmit={signIn}>
                <div className="flex flex-col">
                    <span className='mb-1 text-sm text-white'>Email</span>
                    <input className={`p-2 text-sm rounded outline-0 border border-gray-100 ${isInput ? "border-red" : "border-gray-100"} bg-[transparent]`} type="email" autoComplete={false} onChange={(e) => setEmail(e.target.value)} />
                    {
                        isInput ? <small className='text-red animate-pulse'>email incorrect try again</small> : null
                    }
                </div>
                <div className="flex flex-col">
                    <span className='mb-1 text-sm text-white'>Password</span>
                    <input className={`p-2 text-sm rounded outline-0 border border-gray-100 ${isInput ? "border-red" : "border-gray-100"} bg-[transparent]`} type="password" onChange={(e) => setPassword(e.target.value)} />
                    {
                        isInput ? <small className='text-red animate-pulse'>password incorrect try again</small> : null
                    }
                </div>
                <button className='flex items-center justify-center gap-1 py-2 bg-cyan rounded mt-2 text-gray-300 font-bold'>
                    <span>Sign in</span>
                    {
                        loading ? <AiOutlineLoading3Quarters className='animate-spin' /> : <FaAnglesRight className='text-gray-200' />
                    }
                    
                </button>
            </form>
            <div className="mt-4">
                <h2 className='text-sm text-center'>Login with social account</h2>
                <button className="w-full flex justify-center mt-4" onClick={signInWithGoogle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-cyan text-center">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Login