import React from 'react'
import img1 from '../../Images/logo_try.jpg'
import { useNavigate } from 'react-router-dom'
function Footer() {
    const navigate = useNavigate()
    return (
        <div className="w-[100%] mt-7  h-max md:px-[5%] mr-0 text-white bg-black p-5" >
            <div className='flex flex-col justify-center items-center'>
                <h4 className='text-center'>Copyright. All rights reserved.</h4>
                <div className="flex items-center gap-2 mt-2">
                    <img src={img1} onClick={() => navigate('/')} className='h-[40px] md:h-[30px]  md:w-[30px] rounded-[50%] cursor-pointer ' />
                    <h1 className='text-xl font-mono'>IT-DEPT</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
