import React from 'react'
import {  BsFillArrowDownCircleFill} from "react-icons/bs";
import {  AiFillFacebook,AiFillLinkedin,AiFillTwitterSquare, AiFillYoutube} from "react-icons/ai";
export default function Footer() {
  return (
    <div className='px-6 py-12'>
      <div className='flex flex-col py-8 md:flex-row md:justify-between'>
        <div>
            <p className='font-bold '>
                Choose a language <span className="dropdown dropdown-top">
         <label tabIndex={0} className="flex items-center px-2 m-1 font-thin cursor-pointer">English <span><BsFillArrowDownCircleFill/></span></label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
        <div className='w-[500px] grid grid-cols-3'>
            <li><a>Item 1</a></li>
             <li><a>Item 2</a></li>
             <li><a>Item 1</a></li>
             <li><a>Item 2</a></li>
             <li><a>Item 1</a></li>
             <li><a>Item 2</a></li>
             <li><a>Item 1</a></li>
             <li><a>Item 2</a></li>
             <li><a>Item 1</a></li>
             <li><a>Item 2</a></li>
             <li><a>Item 1</a></li>
             <li><a>Item 2</a></li>
             
            </div>
        </ul>
            </span>
            </p>
        </div>
        <div className='flex '>
            <button><AiFillFacebook className='text-3xl rounded-full'/></button>
            <button><AiFillTwitterSquare className='text-3xl rounded-full'/></button>
            <button><AiFillLinkedin className='text-3xl rounded-full'/></button>
            <button><AiFillYoutube className='text-3xl rounded-full'/></button>

        </div>
      </div>
      <hr/>
      <div className='flex flex-col py-8 md:flex-row md:justify-between'>
        <div>
            <p className='text-gray-600'>2023 Evernote Corporation. All rights reserved.</p>
        </div>
        <div className='flex gap-3'>
            <p>Security</p>
            <p>Legal</p>
            <p>Privacy</p>
        </div>
      </div>
    </div>
  )
}
