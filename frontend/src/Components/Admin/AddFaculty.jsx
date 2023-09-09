import React from 'react'
import img1 from '../../Images/add_faculty.png'
export default function AddFaculty() {
  // alert('Hello')
  return (
    <div className="w-100 mt-16 justify-center max-xl:px-2 xl:px-36 ">
      <div className="w-[100%] flex md:flex-row- max-md:flex-col-reverse p-3 bg-white shadow-xl rounded-md">
        <div className='w-[100%] text-center  bg-white pb-10'>
          <h1 className='text-center font-semibold text-2xl underline underline-offset-4'>Add Faculty</h1>
          <form className='mt-10 text-black' action="">
            <input type="text" className='text-xl font-semibold placeholder:text-slate-500 border-b-2 border-blue-300  hover:border-blue-900 focus:border-blue-900 focus:outline-none w-[80%] my-2' placeholder='Name'  />
            <input type="text" className='text-xl font-semibold placeholder:text-slate-500 border-b-2 border-blue-300  hover:border-blue-900 focus:border-blue-900 focus:outline-none w-[80%] my-2' placeholder='Email'  />
            <input type="text" className='text-xl font-semibold placeholder:text-slate-500 border-b-2 border-blue-300  hover:border-blue-900 focus:border-blue-900 focus:outline-none w-[80%] my-2' placeholder='Qualification'  />
            <input type="text" className='text-xl font-semibold placeholder:text-slate-500 border-b-2 border-blue-300  hover:border-blue-900 focus:border-blue-900 focus:outline-none w-[80%] my-2' placeholder='Teaching Experience'  />
            <label className=' border-blue-900 text-blue-900 font-semibold bg-blue-300 hover:bg-blue-600 hover:text-white py-[6px] px-[12px] inline-block cursor-pointer mt-5'>
            <input type="file" style={{display:'none'}} />
            Upload Photo
            </label>
                <br/>
            <button className='mt-8 w-[80%] bg-blue-800 rounded-lg py-2 text-xl text-white cursor-pointer hover:bg-blue-500'>
              Add Faculty 
            </button>
          </form>
        </div>
        <div className='w-[100%]'>
          <img className='w-[100%] h-[100%]' src={img1} alt="" />
        </div>

      </div>
    </div>
  )
}

