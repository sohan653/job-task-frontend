import React from 'react'
import { BsBookmarkCheckFill } from 'react-icons/bs';
import NoteCard from './NoteCard';
export default function EverNote() {
    const array=["product","features","resources","support","company"]
  return (
    <div className='pl-4'>
      <h1 className='flex text-3xl'><BsBookmarkCheckFill className='text-green-600'/> EverNote</h1>
      <br/>
      <hr/>
      <div className='grid grid-cols-2 gap-0 pl-10 md:grid-cols-6 md:gap-4'>
        {
            array.map(x=> <NoteCard name={x}></NoteCard>)
        }
      </div>
    </div>
  )
}
