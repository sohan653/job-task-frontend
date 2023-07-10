import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className='flex items-center justify-center w-full my-16 h-72 lg:h-60'>
      <div className='flex flex-col items-center'>
      <h1 className='py-10 text-6xl font-bold '>Tame your work, organize your life</h1>
      <p className='pb-10'>
      Remember everything and tackle any project with your notes, tasks, and schedule all in one place.
      </p>
     <button className='bg-green-600 btn'>Sign Up for Free</button>
     <p className='py-2 text-center'>Already SignUp please  <Link to='/login' className='text-green-600' >Login</Link></p>
      </div>
    </div>
  )
}
