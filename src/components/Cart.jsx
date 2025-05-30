import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Cart = () => {
    // Use cart context
    const { items: cartItems, updateQuantity, removeItem, total, tax, shipping, clearCart } = useCart();

    // Calculate subtotal
    const subtotal = total - tax - shipping;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
                    <p className="text-gray-600">
                        {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <motion.div
                        className="flex-grow"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {cartItems.length > 0 ? (
                            <div className="bg-white shadow-sm border border-gray-100">
                                {cartItems.map(item => (
                                    <motion.div
                                        key={item.id}
                                        className="flex flex-col sm:flex-row items-center py-6 px-4 border-b border-gray-100 last:border-b-0"
                                        variants={itemVariants}
                                    >
                                        <div className="sm:w-24 w-full h-24 mb-4 sm:mb-0 flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex-grow px-4">
                                            <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                                            <p className="text-gray-500 text-sm mb-4">SKU: {item.id}000{item.id}</p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center border border-gray-200">
                                                    <button
                                                        className="px-3 py-1 hover:bg-gray-100"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-3 py-1 border-x border-gray-200">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        className="px-3 py-1 hover:bg-gray-100"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    className="text-gray-500 hover:text-gray-700"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="sm:w-24 w-full text-right sm:pl-4 mt-4 sm:mt-0">
                                            <p className="text-lg font-medium text-gray-900">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                ${item.price.toFixed(2)} each
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white p-8 text-center shadow-sm border border-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <h3 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h3>
                                <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
                                <Link to="/products" className="bg-gray-900 text-white px-6 py-3 inline-block font-medium hover:bg-gray-800 transition-colors">
                                    Browse Products
                                </Link>
                            </div>
                        )}

                        {cartItems.length > 0 && (
                            <div className="mt-6 flex justify-between items-center">
                                <Link to="/products" className="text-gray-600 hover:text-gray-900 font-medium flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Continue Shopping
                                </Link>
                                <button
                                    className="text-gray-600 hover:text-gray-900 font-medium flex items-center" onClick={clearCart}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Clear Cart
                                </button>
                            </div>
                        )}
                    </motion.div>

                    {/* Order Summary */}
                    {cartItems.length > 0 && (
                        <motion.div
                            className="lg:w-80 w-full"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="bg-white p-6 shadow-sm border border-gray-100 sticky top-24">
                                <h2 className="text-lg font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100">Order Summary</h2>

                                <div className="space-y-3 mb-6">                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span>${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between text-lg font-medium text-gray-900 pt-4 border-t border-gray-100 mb-6">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>

                                <Link
                                    to="/checkout"
                                    className="bg-gray-900 text-white py-3 px-4 w-full block text-center font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Proceed to Checkout
                                </Link>

                                <div className="mt-4 flex items-center justify-center space-x-2 text-gray-500 text-sm">
                                    <span>Secure Checkout</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
