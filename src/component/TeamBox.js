import React from 'react'
import {BsArrowRightCircle} from "react-icons/bs";

export default function TeamBox() {
  return (
    <div className='flex justify-center w-full m-3 md:m-11 lg:m-11'>
      <div className='flex flex-col items-start w-4/5 h-auto p-3 border-2 border-gray-500 border-solid rounded md:w-3/5 lg:flex-row md:flex-row md:justify-between md:items-center'>
        <div>
            <h1 className='py-3 text-3xl'>Ever Note Teams</h1>
            <h1 className='text-2xl font-bold'>$19.99 / USER / MONTH</h1>
            <p className='py-3'>Collaborate and share knowledge to keep your team on the same page.</p>
        </div>
        <button className='flex items-center'><BsArrowRightCircle className='text-4xl text-green-600 md:text-7xl'/></button>
      </div>
    </div>
  )
}
