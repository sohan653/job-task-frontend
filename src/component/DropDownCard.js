import React from 'react'
import { BsFillBoxSeamFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function DropDownCard({name}) {
  return (
    <Link className='flex items-center justify-evenly'>
        <BsFillBoxSeamFill className='text-3xl text-green-600'/>
      <div className='flex flex-col'>
            <p className='text-xl font-bold'>{name}</p>
            <p>A save button for the web</p>
      </div>
    </Link>
  )
}
