import React from 'react'
import Card from './Card'

export default function Package() {
  
    const arr=["free","personal","professional"]
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-end'>
        <h1 className='pt-8 text-4xl font-bold'>Find Your Evernote</h1>
        <p className='py-10 pl-10 text-xl text-center'>
        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </p>
        <button className='mb-10 text-green-600 btn'>COMPARE PLANS →</button>
      </div>
      <div className='grid grid-cols-1 gap-3 md:gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {arr.map(x => <Card name={x}></Card>)}
      </div>
    </div>
  )
}
