import React from 'react'
import ITLogo from '../../Images/logo_try.jpg'
import GPMLogo from '../../Images/GPM-LOGO.png'
function Top() {
  return (
    <div className="w-[100%]  h-full px-[10%] py-12 mr-0 bg-[#daf3f1]" >
      <div className='flex md:flex-row flex-col md:gap-10 justify-center items-center'>
        <div className='hidden md:block md:mt-10'>
          <img src={ITLogo} alt="logo-IT" className='rounded-[50%] w-[100px] h-[100px] mt-8' />
        </div>
        <div className='flex flex-col max-md:text-center justify-center items-center '>
          <div className='flex flex-row gap-2'>
            <img src={GPMLogo} alt="logo-GPM" className='h-[65px] w-[65px] rounded-[50%]' />
            {/* <img src={ITLogo} alt="logo-IT" className='md:hidden rounded-[50%] w-[65px] h-[65px] mt-0 object-cover ' /> */}
          </div>
          <h1 className='text-2xl font-semibold text-cyan-600'>Government Polytechnic Mumbai</h1>
          <h1 className='md:text-4xl text-2xl font-bold'>Department Of Information Technology</h1>
          <h4 className='text-gray-700'>(An autonomous Institute of Government of Maharashtra)</h4>
        </div>
      </div>

    </div>
  )
}

export default Top
