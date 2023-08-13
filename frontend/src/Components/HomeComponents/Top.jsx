import React from 'react'
import ITLogo from '../../Images/logo_try.jpg'
import GPMLogo from '../../Images/GPM-LOGO.png'
import home_gif from '../../Images/home_2.jpg'
function Top() {
  return (
    <div style={{ backgroundImage: `url(${home_gif})` }}  className='top-0 w-[100%] h-screen px-[10%] pt-52 bg-cover absolute' >
      
      <div className='flex md:flex-row flex-col md:gap-4 justify-center items-center md:mr-10 '>
        <div className='hidden md:block md:mt-10'>
          <img src={ITLogo} alt="logo-IT" className='rounded-[50%] w-[130px] h-[130px] mt-8' />
        </div>
        <div className='flex flex-col max-md:text-center justify-center items-center text-white'>
          <div className='flex flex-row gap-2'>
            <img src={GPMLogo} alt="logo-GPM" className='h-[65px] w-[65px] rounded-[50%]' />
            {/* <img src={ITLogo} alt="logo-IT" className='md:hidden rounded-[50%] w-[65px] h-[65px] mt-0 object-cover ' /> */}
          </div>
          <h1 className='text-2xl font-semibold text-cyan-600'>Government Polytechnic Mumbai</h1>
          <h1 className='md:text-4xl text-2xl font-bold'>Department Of Information Technology</h1>
          <h4 className='text-gray-100'>(An autonomous Institute of Government of Maharashtra)</h4>
        </div>
      </div>

    </div>
  )
}

export default Top
