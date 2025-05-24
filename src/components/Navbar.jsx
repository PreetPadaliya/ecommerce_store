import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <nav className=' flex items-center px-4 shadow-lg font-bold border-gray-300 bg-blue-300 h-14'>
            <ul className='flex flex-row pt-3 items-center w-full h-full'>
                <Link className='mr-auto h-full flex items-center text-white no-underline
' to="#">Navbar</Link>
                <Link className='mx-4 h-full flex items-center text-blue no-underline
' to="home">Home</Link>
                <Link className='mx-4 h-full flex items-center text-blue no-underline
' to="products">Products</Link>
                <Link className='mx-4 h-full flex items-center text-blue no-underline
' to="contact">Contact</Link>
                <button className='ml-auto h-full flex items-center border p-2  rounded-lg hover:bg-gray-200 hover:text-black duration-500 border-2 '>Signup</button>
            </ul>
        </nav>
    )
}

export default navbar
