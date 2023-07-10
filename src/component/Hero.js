import React from 'react'

const Image=import('../Assets/Image/task-hero.png')
export default function Hero() {
  return (
    <div>
      <div className="min-h-screen hero">
  <div className="flex-col hero-content lg:flex-row">
    <img src={'task-hero.png'} className="w-3/4 rounded-lg shadow-2xl " />
    <div className='flex flex-col gap-6'>
      <div>
        <h1 className='font-bold'>WORK ANYWHERE</h1>
        <p >
        Keep important info handy—your notes sync automatically to all your devices.   
        </p>
      </div>
      <div>
        <h1 className='font-bold'>WORK ANYWHERE</h1>
        <p >
        Keep important info handy—your notes sync automatically to all your devices.   
        </p>
      </div>
      <div>
        <h1 className='font-bold'>WORK ANYWHERE</h1>
        <p >
        Keep important info handy—your notes sync automatically to all your devices.   
        </p>
      </div>
      <div>
        <h1 className='font-bold'>WORK ANYWHERE</h1>
        <p >
        Keep important info handy—your notes sync automatically to all your devices.   
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
