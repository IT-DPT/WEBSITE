import React from 'react'

function About() {
    return (
        <div className="w-[100%] mt-7  h-max md:px-[10%] mr-0 text-black " >
            <div className='flex md:flex-row max-md:flex-col gap-10'>
                <div className='h-max p-5 md:w-[70%] bg-gray-100 rounded-3xl   shadow-xl '>
                    <h1 className='text-5xl font-semibold max-md:text-center ml-1'>About</h1>
                    <p className='p-2 mt-5 text-lg md:text-xl text-gray-600'>The department of Information Technology was established in 2001 with intake capacity of 40 students. In 2007 intake capacity is increased to 60 students. In 2011 minority shift (second shift) is started with intake capacity of 60 students. Information Technology department will strive to achieve excellence in education so as to enable students to establish themselves as world-class technicians. The department will provide vibrant infrastructure and software application tool sets to empower them with the proficiency and knowledge required to excel in the dynamic field of IT and to pursue higher education.
                       
                    </p>
                </div>
                {/* Notice Board */}
                <div className='md:w-[30%] bg-gray-200 p-6 h-max'>
                    <h1 className='text-xl font-bold'>Notice Board</h1>
                    <div className='mt-3 p-5 bg-gray-300 h-max'>
                        <ul>
                            <li>Result Declared</li>
                            <li>Result Declared</li>
                            <li>Result Declared</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
