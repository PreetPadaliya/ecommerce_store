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

    return (
        <motion.div
            className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Subscribe to Our Newsletter
                </motion.h2>

                <motion.p
                    className="text-lg mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Stay updated with the latest products, exclusive deals, and special promotions.
                </motion.p>

                {submitted ? (
                    <motion.div
                        className="bg-white text-green-600 rounded-lg p-4 max-w-md mx-auto shadow-lg"
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
                            className="text-3xl mb-2"
                            animate={{
                                rotate: [0, 20, 0, -20, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ duration: 1 }}
                        >
                            ✓
                        </motion.div>
                        <p className="font-semibold">Thank you for subscribing!</p>
                        <p className="text-sm">We've sent a confirmation email to your inbox.</p>
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
                                    }}
                                    placeholder="Enter your email address"
                                    className={`w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow duration-300 ${!isValid ? 'border-2 border-red-500' : ''}`}
                                />
                                {!isValid && (
                                    <motion.p
                                        className="text-red-200 text-sm mt-1 text-left absolute"
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
                                className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
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
                    className="mt-8 text-sm text-white/70 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p>We respect your privacy and will never share your information.</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default NewsletterSubscribe;
