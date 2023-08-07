import React from 'react'
import ITLogo from '../../Images/logo_try.jpg'
import GPMLogo from '../../Images/GPM-LOGO.png'
function Top() {
  return (
    <div className="w-[100%]  h-full px-[10%] py-12 mr-0 bg-slate-100" >
      <div className='flex md:flex-row flex-col md:ml-10 md:gap-32'>
        <div className='hidden md:block'>
          <img src={ITLogo} alt="logo-IT" className='rounded-[50%] w-[170px] h-[170px]' />
        </div>
        <div className='flex flex-col text-center justify-center items-center '>
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
