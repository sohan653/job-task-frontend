import React from 'react'
import { BsBook } from "react-icons/bs";
export default function Question() {
  return (
    <div className='flex justify-center w-full py-20 '>
     <div className='w-full '>
     <h1 className='text-3xl font-bold text-center '> Have More Question </h1>
      <div className='flex flex-col w-full mx-auto md:w-4/5 pt-9 md:flex-row md:justify-between'>
        <div className='flex flex-col items-center justify-center '>
            <BsBook className='text-5xl text-green-600'/>
            <h1 className='text-3xl font-bold'>Need Help?</h1>
            <button className='py-3'>VISIT OUR HELP & LEARNING →</button>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <BsBook className='text-5xl text-green-600'/>
            <h1 className='text-3xl font-bold'>Need to get in touch?</h1>
            <button className='py-3'>Contact Us →</button>
        </div>
      </div>
     </div>
    </div>
  )
}
