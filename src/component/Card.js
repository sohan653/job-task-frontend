import React from 'react'
import { BsCheckLg } from "react-icons/bs";

export default function Card({name}) {
  
  return (
    <div>
      <div className="shadow-xl card card-compact w-72 bg-base-100">
 
  <div className="card-body">
    <h2 className="text-4xl ">{name}</h2>
    <h1 className='text-3xl card-title'>$12/monthly</h1>
    <h2 className="card-title">Pay 0 per month</h2>
    <p className='text-2xl'>Capture ideas and find them quickly</p>
    <div className='py-3'>
    <p className='flex py-1'> <span><BsCheckLg className='text-green-600'/> </span> Sync up to 2 devices</p>
    <p className='flex py-1'> <span><BsCheckLg className='text-green-600'/> </span>10 GB monthly uploads</p>
    <p className='flex py-1'> <span><BsCheckLg className='text-green-600'/> </span>Customize Home dashboard and access extra widgets</p>
    <p className='flex py-1'> <span><BsCheckLg className='text-green-600'/> </span>Connect primary Google Calendar account</p>
    <p className='flex py-1'> <span><BsCheckLg className='text-green-600'/> </span>Manage tasks in one place</p>
    <p className='flex py-1'> <span><BsCheckLg className='text-green-600'/> </span>offers offers offers</p>
    </div>
    <div className=" card-actions">
      <button className="w-full bg-green-600 btn">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}
