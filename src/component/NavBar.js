import React from 'react'
import HomePage from '../pages/HomePage'
import {  BsFillArrowDownCircleFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useAuth } from '../contextApi/auth';
import { toast } from 'react-toastify';
import { BsFillAwardFill } from "react-icons/bs";
import DropDownCard from './DropDownCard';
import DropDownCard2 from './DropDownCard2';

const array1=["templates","task","search","home","calender","templates"];
const array2=["Free","personal","proffessiobnal","teamly"]

export default function NavBar() {
  const [auth,setAuth]=useAuth();
  const user=auth?.user
  console.log(user)
  const logout =()=>{
   
    console.log("aschi")
    localStorage.removeItem('auth');
    toast('Logged out')
    window.location.href="/"
}
  return (
    <div>
      <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="flex flex-col drawer-content">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <Link to='/' className="flex-1 px-2 mx-2"> <BsFillAwardFill className='text-4xl text-green-600'/> <span className='text-3xl'>EverNote</span></Link>
      <div className="flex-none hidden w-5/6 lg:block">
        <ul className="flex flex-row justify-between menu menu-horizontal">
          {/* Navbar menu content here */}
          <div className='flex items-center'>
          <li ><a className='font-bold hover:text-green-600'>WHY EVERNOTE</a></li>
          {/* dropdown */}

          <li className="dropdown dropdown-hover">
         <label tabIndex={0} className="m-1 font-bold hover:text-green-600 ">FEATURES <span><BsFillArrowDownCircleFill/></span></label>
            <ul tabIndex={0} className="dropdown-content flex  z-[1] menu p-2 shadow bg-base-100 rounded-box ">
            <div className='grid w-[800px] grid-cols-3 gap-6'>
            {
              array1.map(x=> <DropDownCard name={x}></DropDownCard>)
            }
             <button className='hover:bg-green-600 btn'>See all</button>
            </div>
             </ul>
            </li>

        
            <li className="dropdown dropdown-hover ">
         <label tabIndex={0} className="m-1 font-bold hover:text-green-600 ">FOR INDIVIDUALS<span><BsFillArrowDownCircleFill/></span></label>
            <ul tabIndex={0} className="dropdown-content flex z-[1] menu p-2 shadow bg-base-100 rounded-box ">
            <div className='w-[500px] grid gap-5 grid-cols-2'>
            {
              array2.map(x=> <DropDownCard2 name={x}></DropDownCard2>)
            }
            
            <button className='hover:bg-green-600 btn'>See all</button>
            </div>
             </ul>
            </li>

          <li><a className='font-bold hover:text-green-600'>FOR TEAMS</a></li>
          </div>
          <div className='flex items-center'>
          <li><a>Help</a></li>
          <li>{user ?  <li className=' hover:text-green-600' onClick={logout}>Logout</li>
              :    <Link className=' hover:text-green-600' to={'/login'}>Login</Link>}</li>

              
          <button className=' btn btn-outline outline-green-600 hover:bg-green-600'>download</button>
          </div>
          
        </ul>
      </div>
    </div>
    {/* Page content here */}
   <HomePage></HomePage>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="h-full p-4 menu w-80 bg-base-200">
      {/* Sidebar content here */}
      <li ><a className='font-bold hover:text-green-600'>WHY EVERNOTE</a></li>
      <li ><a className='font-bold hover:text-green-600'>FEATURES</a></li>
      <li ><a className='font-bold hover:text-green-600'>FOR INDIVIDUALS</a></li>
      <li ><a className='font-bold hover:text-green-600'> FOR Teams</a></li>
      <li><a>Help</a></li>
          <li>{user ?  <li className=' hover:text-green-600' onClick={logout}>Logout</li>
              :    <Link className=' hover:text-green-600' to={'/login'}>Login</Link>}</li>

              
          <button className=' btn btn-outline outline-green-600 hover:bg-green-600'>download</button>
      
    </ul>
    
  </div>
</div>
    </div>
  )
}

