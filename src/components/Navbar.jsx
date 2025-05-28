import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const cartItemCount = 3; // This would come from your cart state/context in a real app

    return (
        <nav className='bg-white shadow-md py-3 px-6 sticky top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between'>
                <Link className='text-2xl font-bold text-blue-600 hover:text-blue-700 transition-all duration-300 transform hover:scale-105' to="/">
                    E-Store
                </Link>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-md mx-6">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="absolute right-0 top-0 mt-2 mr-3 text-gray-500 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='hidden md:flex items-center space-x-6'>
                    <Link className='text-gray-600 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600 py-1' to="/home">Home</Link>
                    <Link className='text-gray-600 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600 py-1' to="/products">Products</Link>

                    {/* Categories with dropdown */}
                    <div className="relative" onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>
                        <Link className='text-gray-600 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600 py-1 flex items-center' to="/categories">
                            Categories
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        {showCategories && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20">
                                <Link to="/categories/electronics" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Electronics</Link>
                                <Link to="/categories/fashion" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Fashion</Link>
                                <Link to="/categories/home" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Home & Garden</Link>
                                <Link to="/categories/toys" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Toys & Games</Link>
                            </div>
                        )}
                    </div>

                    <Link className='text-gray-600 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600 py-1' to="/contact">Contact</Link>
                </div>

                <div className='flex items-center space-x-4'>
                    {/* Cart with item count */}
                    <Link to="/cart" className='text-gray-600 hover:text-blue-600 transition-colors relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                    </Link>

                    <Link to="/login" className='text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium px-4 py-2 rounded-md hover:bg-gray-100'>Login</Link>
                    <Link to="/signup" className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-md'>
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button
                        className='text-gray-600 hover:text-blue-600'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-3 pb-3 border-t border-gray-200">
                    <div className="pt-2 pb-1 space-y-1">
                        <Link to="/home" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Home</Link>
                        <Link to="/products" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Products</Link>
                        <Link to="/categories" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Categories</Link>
                        <Link to="/contact" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Contact</Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">Guest User</div>
                                <div className="text-sm font-medium text-gray-500">guest@example.com</div>
                            </div>
                        </div>
                        <div className="mt-3 space-y-1">
                            <Link to="/profile" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Your Profile</Link>
                            <Link to="/cart" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Cart</Link>
                            <Link to="/login" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Login</Link>
                            <Link to="/signup" className="block px-4 py-2 text-base font-medium text-blue-600 hover:bg-gray-100">Sign Up</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
