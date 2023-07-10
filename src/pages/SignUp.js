import axios from 'axios';
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';


const SignUp = () => {
  
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false)
    const[email,setEmail]=useState('')
    const[fistName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[password,setPassword]=useState('')
    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
            console.log("aschi")
            
                const payload={

                    email:email,
                    firstName:fistName,
                    lastName:lastName,
                    password:password
                };
                console.log("esechi")
              setLoading(true);
                const {data}= await axios.post('/signup',payload);
                console.log(data)
                if(data?.status === "success")
                {   setLoading(false)
                    navigate('/login')
                    toast.success("registration success")
                    
                }
                else{
                  toast.error('email already exists')
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
            <div className='w-full'>

                <div className='flex flex-col h-auto mx-auto mt-4 border-2 rounded-md outline-none w-96'>
                {loading &&      <div className='flex flex-col items-center'>
                        <h1 className='p-2 text-center'>loading</h1>
                        <progress className="w-full progress"></progress>
                    </div>
                    }
                    
                    <h1 className='p-4 text-3xl text-center'>Please Sign Up</h1>

                    <form  className='flex flex-col items-center w-full '>

                        <input onChange={e=>setEmail(e.target.value)}  className='w-3/4 p-2 my-4 border-2 border-blue-600 rounded-md outline-none focus:border-green-700' placeholder='Enter Your Valid Email' required type="email" name="" id="email" />
                        <input onChange={e=>setFirstName(e.target.value)} className='w-3/4 p-2 my-4 border-2 border-blue-600 rounded-md outline-none focus:border-green-700' placeholder='Enter Your First Name' required type="text" name="" id="name" />
                        <input onChange={e=>setLastName(e.target.value)} className='w-3/4 p-2 my-4 border-2 border-blue-600 rounded-md outline-none focus:border-green-700' placeholder='Enter Your last Name' required type="text" name="" id="mobile Number" />
                        <input onChange={e=>setPassword(e.target.value)}  className='w-3/4 p-2 my-4 border-2 border-blue-600 rounded-md outline-none focus:border-green-700' placeholder='Password' required type="password" name="" id="password" />
                        
                        <input onClick={handleSubmit}  className='w-3/4 p-2 my-4 font-semibold bg-green-600 rounded-md cursor-pointer hover:bg-green-800 focus:bg-green-700' type="submit" value="submit" />
                    </form>
                    <p className='py-2 text-center'>Already SignUp please  <Link to='/login' className='text-green-600' >Login</Link></p>
                    <div className='flex items-center justify-center'>
                        <div className='border-2 w-28 border-b-slate-700'></div>
                        <p className='p-2'>or</p>
                        <div className='border-2 w-28 border-b-slate-700'></div>
                    </div>
                </div>

            </div>
            
            
        </div>
    );
};

export default SignUp;