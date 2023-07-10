import React from 'react'

export default function Hero3() {
  return (
    <div className='p-10'>
      <div className=" hero">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <img src="task-hero3.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div className='flex flex-col items-start justify-start p-10 '>
        <img className='w-14' src='task_icon.svg' />
      <h1 className="text-5xl font-bold">Hit every deadline</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="text-green-600 btn">Learn More</button>
    </div>
  </div>
</div>
    </div>
  )
}
