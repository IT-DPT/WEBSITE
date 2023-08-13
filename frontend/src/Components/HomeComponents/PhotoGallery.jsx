import React, { useState } from 'react'
import img1 from '../../Images/kho-kho_runnerUp.png'
import Academic_toppers from '../../Images/Academic_toppers.png'
function PhotoGallery() {
    const [set, setState] = useState(0)
    return (
        <div className="w-[100%] py-10 h-max px-[10%] bg-slate-100 flex flex-col" >
            <h1 className='text-4xl font-semibold mt-10'>Achievements</h1>
            <div className='flex flex-row flex-start gap-10 text-md md:text-2xl mt-5'>
                <h1 className={set === 0 ? 'underline underline-offset-4 decoration-sky-600 ' : 'hover:underline hover:underline-offset-4 hover:decoration-sky-400 cursor-pointer'} onClick={() => setState(0)}> Achievements</h1>
                <h1 className={set === 1 ? 'underline underline-offset-4 decoration-sky-600 ' : 'hover:underline hover:underline-offset-4 hover:decoration-sky-400 cursor-pointer'} onClick={() => setState(1)}>Academic Achievements</h1>

            </div>
            <div className='flex flex-col justify-center items-center'>
                {
                    set === 0 ? <>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='h-max mt-10 grid md:grid-cols-4 gap-10 max-md:grid-rows-1'>
                            <div className='p-5 w-[100%] md:w-[300px] bg-slate-200 rounded-md'>
                                <img src={img1} alt="" className='w-[100%] rounded-md' />
                                <p className='mt-4'>Boys Kho-Kho team stood as Runner-up in the inter college zonal Tournament.</p>
                            </div>
                            <div className='p-5 w-[100%] md:w-[300px] bg-slate-200 rounded-md'>
                                <img src={img1} alt="" className='w-[100%] rounded-md' />
                                <p className='mt-4'>Boys Kho-Kho team stood as Runner-up in the inter college zonal Tournament.</p>
                            </div>
                            <div className='p-5 w-[100%] md:w-[300px] bg-slate-200 rounded-md'>
                                <img src={img1} alt="" className='w-[100%] rounded-md' />
                                <p className='mt-4'>Boys Kho-Kho team stood as Runner-up in the inter college zonal Tournament.</p>
                            </div>
                            <div className='p-5 w-[100%] md:w-[300px] bg-slate-200 rounded-md'>
                                <img src={img1} alt="" className='w-[100%] rounded-md' />
                                <p className='mt-4'>Boys Kho-Kho team stood as Runner-up in the inter college zonal Tournament.</p>
                            </div>


                        </div>
                        <button className='py-2 px-10 mt-10 bg-gray-300 w-max rounded-md'>Show More...</button>
                        </div>
                    </> :
                        <>
                            <img src={Academic_toppers} alt="" className='flex mt-10 justify-center items-center'/>
                        </>
                }
            </div>
        </div>
    )
}

export default PhotoGallery
