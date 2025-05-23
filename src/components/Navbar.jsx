import React from 'react'

const navbar = () => {
    return (
        <nav className=' flex items-center px-4 shadow-lg  text-white font-bold border-gray-300 bg-blue-300 h-14'>
            <ul className='flex flex-row pt-3 items-center w-full h-full'>
                <li className='mr-auto h-full flex items-center'>Home</li>
                <li className='mx-4 h-full flex items-center'>About</li>
                <li className='mx-4 h-full flex items-center'>Product</li>
                <li className='mx-4 h-full flex items-center'>Contact</li>
                <li className='ml-auto h-full flex items-center border p-2  rounded-lg hover:bg-gray-200 hover:text-black duration-500 border-2 '>Signup</li>
            </ul>
        </nav>
    )
}

export default navbar
