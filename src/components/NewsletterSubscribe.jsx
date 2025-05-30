import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSubscribe = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setIsValid(false);
            return;
        }

        // Handle form submission
        setSubmitted(true);
        setIsValid(true);
        setEmail('');

        // Reset the submitted state after 5 seconds
        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    };

    return (<motion.div
        className="bg-gray-100 py-16 border-t border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
    >
        <div className="container mx-auto px-4 text-center">
            <motion.h2
                className="text-2xl font-semibold mb-6 text-gray-800 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                Subscribe to Our Newsletter
            </motion.h2>

            <motion.p
                className="text-base mb-8 max-w-2xl mx-auto text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
            >                    Receive our quarterly industry insights, product announcements, and exclusive offers.
            </motion.p>

            {submitted ? (
                <motion.div
                    className="bg-white text-gray-900 border border-gray-200 p-5 max-w-md mx-auto shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }
                    }}
                >
                    <motion.div
                        className="text-xl mb-2 text-gray-800"
                        animate={{
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 1 }}
                    >
                        <svg className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </motion.div>
                    <p className="font-medium text-gray-800">Subscription Confirmed</p>
                    <p className="text-sm text-gray-600 mt-1">Thank you for subscribing to our newsletter.</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <motion.div
                            className="flex-grow relative"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setIsValid(true);
                                }} placeholder="Enter your business email"
                                className={`w-full py-3 px-4 bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-500 transition-shadow duration-300 ${!isValid ? 'border-red-500' : ''}`}
                            />
                            {!isValid && (
                                <motion.p
                                    className="text-red-600 text-xs mt-1 text-left absolute"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Please enter a valid email address
                                </motion.p>
                            )}
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Subscribe
                        </motion.button>
                    </div>
                </form>
            )}

            <motion.div
                className="mt-6 text-xs text-gray-500 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <p>Your information is protected by our Privacy Policy. You may unsubscribe at any time.</p>
            </motion.div>
        </div>
    </motion.div>
    );
};

export default NewsletterSubscribe;
