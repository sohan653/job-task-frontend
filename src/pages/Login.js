import axios from 'axios';
import React, {useState} from 'react';

import {Link, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import { useAuth } from '../contextApi/auth';


const Login = () => {
    const[auth,setAuth]=useAuth()
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false)
    const [password,setPassword] =useState('');
    const [email,setEmail] =useState('');
    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
          
            
                const payload={

                    email:email,
                    password:password
                };
               
              setLoading(true);
                const {data}= await axios.post('/login',payload);
                console.log(data)
                if(data?.status=== "success")
                { 
                    const user=data?.user[0];
                    console.log(user)
                      setLoading(false);
                      setAuth({ ...auth, user: user });
                      localStorage.setItem("auth", JSON.stringify(user));
                      
                    navigate('/')
                    toast.success("login success")
                    
                }
                else{
                  toast.error('password or email is wrong')
                  setLoading(false)
                    
                }
            }
        
        catch (e) {
            toast.error('something wrong')
            setLoading(false)
        }
    }
    return (
        <div>
            <div className='w-full h-[574px] mb-6  box-border'>

                <div className='flex flex-col mx-auto mt-4 border-2 rounded-md outline-none w-96'>
                {loading &&      <div className='flex flex-col items-center'>
                        <h1 className='p-2 text-center'>loading</h1>
                        <progress className="w-full progress"></progress>
                    </div>
                    }
                    
                    <h1 className='p-4 text-3xl text-center'> Login</h1>
                    <div className='flex flex-col items-center w-full '>

                        <input onChange={(e) => setEmail(e.target.value)} autoComplete="off"
                               className='w-3/4 p-2 my-4 border-2 border-blue-600 rounded-md outline-none focus:border-green-700'
                               placeholder='Enter Your Valid Email' type="email" required name="" id=""/>

                        <input onChange={(e) => setPassword(e.target.value)} autoComplete="off"
                               className='w-3/4 p-2 my-4 border-2 border-blue-600 rounded-md outline-none focus:border-green-700'
                               placeholder='Enter Your Password' type="password" required name="" id=""/>
                        <input onClick={handleSubmit}
                               className='w-3/4 p-2 my-4 font-semibold bg-green-600 rounded-md cursor-pointer hover:bg-green-800 focus:bg-green-700'
                               type="submit" value="Log in"/>
                    </div>
                    <Link to='/create-otp' className='text-center text-green-600'>forgot password</Link>
                    <p className='py-2 text-center'>Not Sign Up please <Link to='/signup' className='text-green-600'
                                                                            >sign up</Link></p>
                    <div className='flex items-center justify-center'>
                        <div className='border-2 w-28 border-b-slate-700'></div>
                        <p className='p-2'>*</p>
                        <div className='border-2 w-28 border-b-slate-700'></div>
                    </div>


                </div>


            </div>

        </div>
    );
};

export default Login;