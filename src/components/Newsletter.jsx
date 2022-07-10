import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:3xl text-2xl font-bold py-2'>Wants tips & tricks to optimize your flow ?</h1>
                    <p className='mb-4'>Sign up to our newsletter and stay up to date.</p>
                </div>

                <div my-4>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder="Enter your Email" />
                        <button className='bg-[#1363DF] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>Notify Me</button>
                    </div>
                <p>We care about the protection of your data. read our <span className='text-[#1363DF]'>Privacy Policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter