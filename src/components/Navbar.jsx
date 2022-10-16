import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#243E36]'>
            <h1 className='w-full text-3xl font-bold text-[#243E36]'>GreenBook</h1>
            <ul className='flex'>
                <li className='p-4'>Sutainable</li>
                <li className='p-4'>Convenient</li>
                <li className='p-4'>Intuitive</li>
                <li className='p-4'>Healthy</li>
                <li className='p-4'>Green</li>
            </ul>

        </div>
    )
}

export default Navbar