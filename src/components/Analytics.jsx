import React from 'react'
import Desktop from '../assets/desktop.svg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 mb-8' src={Desktop} alt="/" />
        <div className='flex flex-col justify-center md:mt-20'>
          <p className='text-[#1363DF] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae modi vero incidunt assumenda expedita provident quis iure iste dolor ducimus voluptate, commodi praesentium vitae fugiat dicta culpa ullam aliquid.</p>
          <button className='bg-black w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3 text-[#1363DF]'>Get Started</button>
        </div>
      </div>

    </div>
  )
}

export default Analytics