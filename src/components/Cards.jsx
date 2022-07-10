import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Group from '../assets/group.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] bg-white'>
      <div className='max-w-[1240px] mx-8 grid md:grid-cols-3 gap-8'>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-30ms'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center font-bold text-4xl'>£150</p>
          <div className='font-medium text-center py-4'>
            <p className='border-b py-2 mx-8'>500GB Storage</p>
            <p className='border-b py-2 mx-8'>1 Granted User</p>
            <p className='border-b py-2 mx-8 mb-4'>Send up to 2GB</p>
          </div>
          <button className='bg-[#1363DF] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Start trial</button>
        </div>

        <div className='w-full shadow-xl bg-gray-50 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-30ms'>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Two Users</h2>
          <p className='text-center font-bold text-4xl'>£150</p>
          <div className='font-medium text-center py-4'>
            <p className='border-b py-2 mx-8'>500GB Storage</p>
            <p className='border-b py-2 mx-8'>1 Granted User</p>
            <p className='border-b py-2 mx-8 mb-4'>Send up to 2GB</p>
          </div>
          <button className='text-[#1363DF] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 bg-black'>Start trial</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-30ms'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Group} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Multiple Users</h2>
          <p className='text-center font-bold text-4xl'>£150</p>
          <div className='font-medium text-center py-4'>
            <p className='border-b py-2 mx-8'>500GB Storage</p>
            <p className='border-b py-2 mx-8'>1 Granted User</p>
            <p className='border-b py-2 mx-8 mb-4'>Send up to 2GB</p>
          </div>
          <button className='bg-[#1363DF] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Start trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards