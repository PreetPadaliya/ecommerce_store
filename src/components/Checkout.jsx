import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const navigate = useNavigate();
    const { items, total, shipping, tax, clearCart } = useCart();
    const [step, setStep] = useState(1);

    // Form states
    const [shippingInfo, setShippingInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',
        phone: ''
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        nameOnCard: '',
        expiryDate: '',
        cvv: ''
    });

    const [orderComplete, setOrderComplete] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');
    const [errors, setErrors] = useState({});

    // Validation functions
    const validateShippingInfo = () => {
        const newErrors = {};

        if (!shippingInfo.firstName) newErrors.firstName = 'First name is required';
        if (!shippingInfo.lastName) newErrors.lastName = 'Last name is required';
        if (!shippingInfo.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(shippingInfo.email)) newErrors.email = 'Email is invalid';
        if (!shippingInfo.address) newErrors.address = 'Address is required';
        if (!shippingInfo.city) newErrors.city = 'City is required';
        if (!shippingInfo.state) newErrors.state = 'State is required';
        if (!shippingInfo.zipCode) newErrors.zipCode = 'Zip code is required';
        if (!shippingInfo.phone) newErrors.phone = 'Phone number is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validatePaymentInfo = () => {
        const newErrors = {};

        if (!paymentInfo.cardNumber) newErrors.cardNumber = 'Card number is required';
        else if (!/^\d{16}$/.test(paymentInfo.cardNumber.replace(/\s/g, '')))
            newErrors.cardNumber = 'Card number must be 16 digits';

        if (!paymentInfo.nameOnCard) newErrors.nameOnCard = 'Name on card is required';

        if (!paymentInfo.expiryDate) newErrors.expiryDate = 'Expiry date is required';
        else if (!/^\d{2}\/\d{2}$/.test(paymentInfo.expiryDate))
            newErrors.expiryDate = 'Use format MM/YY';

        if (!paymentInfo.cvv) newErrors.cvv = 'CVV is required';
        else if (!/^\d{3,4}$/.test(paymentInfo.cvv))
            newErrors.cvv = 'CVV must be 3 or 4 digits';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handler functions
    const handleShippingInfoChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({
            ...shippingInfo,
            [name]: value
        });
    };

    const handlePaymentInfoChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo({
            ...paymentInfo,
            [name]: value
        });
    };

    const handleShippingFormSubmit = (e) => {
        e.preventDefault();
        if (validateShippingInfo()) {
            setStep(2);
            window.scrollTo(0, 0);
        }
    };

    const handlePaymentFormSubmit = (e) => {
        e.preventDefault();
        if (validatePaymentInfo()) {
            // Create random order number
            const randomOrderNumber = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
            setOrderNumber(randomOrderNumber);
            setStep(3);
            setOrderComplete(true);
            window.scrollTo(0, 0);

            // In a real application, this is where you would:
            // 1. Process the payment
            // 2. Send order to a backend API
            // 3. Update inventory
        }
    };

    const handleCompleteOrder = () => {
        clearCart();
        navigate('/');
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    // If cart is empty and not completed order, redirect to cart
    if (items.length === 0 && !orderComplete) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-md mx-auto bg-white p-8 shadow-sm">
                    <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
                    <p className="text-gray-600 mb-6">Please add items to your cart before proceeding to checkout.</p>
                    <Link to="/products" className="bg-gray-900 text-white py-2 px-6 inline-block font-medium hover:bg-gray-800">
                        Browse Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
                    {!orderComplete && (
                        <div className="flex items-center mt-6 mb-8">
                            <div className={`relative flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                1
                                <span className="absolute -bottom-6 w-16 text-center text-xs font-medium text-gray-600">Shipping</span>
                            </div>
                            <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-gray-900' : 'bg-gray-200'}`}></div>
                            <div className={`relative flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                2
                                <span className="absolute -bottom-6 w-16 text-center text-xs font-medium text-gray-600">Payment</span>
                            </div>
                            <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-gray-900' : 'bg-gray-200'}`}></div>
                            <div className={`relative flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                3
                                <span className="absolute -bottom-6 w-16 text-center text-xs font-medium text-gray-600">Confirmation</span>
                            </div>
                        </div>
                    )}
                </motion.div>

                <div className="flex flex-col-reverse lg:flex-row gap-8">
                    {/* Checkout Forms */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex-grow"
                    >
                        {step === 1 && (
                            <motion.div
                                variants={formVariants}
                                className="bg-white shadow-sm p-6 lg:p-8 border border-gray-100"
                            >
                                <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Information</h2>

                                <form onSubmit={handleShippingFormSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name*</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={shippingInfo.firstName}
                                                onChange={handleShippingInfoChange}
                                                className={`w-full p-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                            />
                                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name*</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={shippingInfo.lastName}
                                                onChange={handleShippingInfoChange}
                                                className={`w-full p-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                            />
                                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email*</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={shippingInfo.email}
                                                onChange={handleShippingInfoChange}
                                                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address*</label>
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                value={shippingInfo.address}
                                                onChange={handleShippingInfoChange}
                                                className={`w-full p-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                            />
                                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City*</label>
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                value={shippingInfo.city}
                                                onChange={handleShippingInfoChange}
                                                className={`w-full p-3 border ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                            />
                                            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900">State/Province*</label>
                                            <input
                                                type="text"
                                                id="state"
                                                name="state"
                                                value={shippingInfo.state}
                                                onChange={handleShippingInfoChange}
                                                className={`w-full p-3 border ${errors.state ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                            />
                                            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="zipCode" className="block mb-2 text-sm font-medium text-gray-900">Zip/Postal Code*</label>
                                            <input
                                                type="text"
                                                id="zipCode"
                                                name="zipCode"
                                                value={shippingInfo.zipCode}
                                                onChange={handleShippingInfoChange}
                                                className={`w-full p-3 border ${errors.zipCode ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                            />
                                            {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone*</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={shippingInfo.phone}
                                                onChange={handleShippingInfoChange}
                                                className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Country*</label>
                                            <select
                                                id="country"
                                                name="country"
                                                value={shippingInfo.country}
                                                onChange={handleShippingInfoChange}
                                                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                            >
                                                <option value="United States">United States</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-8">
                                        <Link to="/cart" className="text-gray-600 hover:text-gray-900 font-medium flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            Return to Cart
                                        </Link>
                                        <button
                                            type="submit"
                                            className="bg-gray-900 text-white py-3 px-6 font-medium hover:bg-gray-800 transition-colors"
                                        >
                                            Proceed to Payment
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                variants={formVariants}
                                className="bg-white shadow-sm p-6 lg:p-8 border border-gray-100"
                            >
                                <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Information</h2>

                                <form onSubmit={handlePaymentFormSubmit}>
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="cardNumber" className="block mb-2 text-sm font-medium text-gray-900">Card Number*</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="cardNumber"
                                                    name="cardNumber"
                                                    placeholder="1234 5678 9012 3456"
                                                    value={paymentInfo.cardNumber}
                                                    onChange={handlePaymentInfoChange}
                                                    className={`w-full p-3 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                                    maxLength={19}
                                                />
                                                <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex space-x-2">
                                                    <svg className="h-6 w-8 text-gray-400" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="40" height="24" rx="4" fill="currentColor" />
                                                        <path d="M12 7H28V17H12V7Z" fill="white" />
                                                    </svg>
                                                </div>
                                            </div>
                                            {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="nameOnCard" className="block mb-2 text-sm font-medium text-gray-900">Name on Card*</label>
                                            <input
                                                type="text"
                                                id="nameOnCard"
                                                name="nameOnCard"
                                                value={paymentInfo.nameOnCard}
                                                onChange={handlePaymentInfoChange}
                                                className={`w-full p-3 border ${errors.nameOnCard ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                            />
                                            {errors.nameOnCard && <p className="text-red-500 text-xs mt-1">{errors.nameOnCard}</p>}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="expiryDate" className="block mb-2 text-sm font-medium text-gray-900">Expiry Date*</label>
                                                <input
                                                    type="text"
                                                    id="expiryDate"
                                                    name="expiryDate"
                                                    placeholder="MM/YY"
                                                    value={paymentInfo.expiryDate}
                                                    onChange={handlePaymentInfoChange}
                                                    className={`w-full p-3 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                                    maxLength={5}
                                                />
                                                {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="cvv" className="block mb-2 text-sm font-medium text-gray-900">CVV*</label>
                                                <input
                                                    type="text"
                                                    id="cvv"
                                                    name="cvv"
                                                    placeholder="123"
                                                    value={paymentInfo.cvv}
                                                    onChange={handlePaymentInfoChange}
                                                    className={`w-full p-3 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                                                    maxLength={4}
                                                />
                                                {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <div className="flex items-center bg-gray-50 p-3 border border-gray-100 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                                <p className="text-sm text-gray-600">All transactions are secure and encrypted.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-8">
                                        <button
                                            type="button"
                                            className="text-gray-600 hover:text-gray-900 font-medium flex items-center"
                                            onClick={() => setStep(1)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            Back to Shipping
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-gray-900 text-white py-3 px-6 font-medium hover:bg-gray-800 transition-colors"
                                        >
                                            Complete Order
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                variants={formVariants}
                                className="bg-white shadow-sm p-6 lg:p-8 border border-gray-100 text-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Thank You For Your Order!</h2>
                                <p className="text-gray-600 mb-6">
                                    Your order has been placed and is being processed. Your order number is{' '}
                                    <span className="font-medium text-gray-900">{orderNumber}</span>.
                                </p>
                                <p className="text-gray-600 mb-8">
                                    We've sent a confirmation email to{' '}
                                    <span className="font-medium text-gray-900">{shippingInfo.email}</span>.
                                </p>

                                <div className="bg-gray-50 p-6 mb-8 border border-gray-100 text-left">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Order number:</span>
                                        <span className="font-medium text-gray-900">{orderNumber}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Shipping address:</span>
                                        <span className="text-right text-gray-900">
                                            {shippingInfo.firstName} {shippingInfo.lastName}<br />
                                            {shippingInfo.address}<br />
                                            {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}<br />
                                            {shippingInfo.country}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Payment method:</span>
                                        <span className="text-right text-gray-900">
                                            Credit Card ending in {paymentInfo.cardNumber.slice(-4)}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCompleteOrder}
                                    className="bg-gray-900 text-white py-3 px-6 font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Continue Shopping
                                </button>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Order Summary */}
                    <div className="lg:w-80 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-6 shadow-sm border border-gray-100 sticky top-24"
                        >
                            <h2 className="text-lg font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100">Order Summary</h2>

                            {items.length > 0 && !orderComplete && (
                                <div className="mb-6">
                                    <div className="max-h-60 overflow-y-auto mb-4">
                                        {items.map((item) => (
                                            <div key={item.id} className="flex py-3 border-b border-gray-100 last:border-b-0">
                                                <div className="w-16 h-16 flex-shrink-0">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-grow pl-4">
                                                    <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                                                    <p className="text-xs text-gray-500 mb-1">Qty: {item.quantity}</p>
                                                    <p className="text-sm text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${(total - tax - shipping).toFixed(2)}</span>
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

                            <div className="flex justify-between text-lg font-medium text-gray-900 pt-4 border-t border-gray-100">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            {!orderComplete && (
                                <div className="mt-6">
                                    <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                                        <span>Secure Checkout</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
