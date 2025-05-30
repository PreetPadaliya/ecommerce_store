import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        submitting: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({ submitting: true, submitted: false, error: null });

        // Simulate API call
        setTimeout(() => {
            setFormStatus({
                submitting: false,
                submitted: true,
                error: null
            });
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 1500);
    };

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 10 }
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-3xl mx-auto"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Contact Us</h1>
                    <p className="text-gray-600 text-center mb-10">
                        Have questions or feedback? We're here to help.
                    </p>

                    <div className="bg-white shadow-sm border border-gray-100 rounded-sm overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            {/* Contact Information */}
                            <motion.div
                                className="bg-gray-900 text-white p-8 md:w-1/3"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h2 className="text-xl font-medium mb-6">Contact Information</h2>

                                <motion.div
                                    className="space-y-6"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.div
                                        className="flex items-start space-x-3"
                                        variants={itemVariants}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                                        </svg>
                                        <div>
                                            <p className="text-amber-400 font-medium mb-1">Phone</p>
                                            <p className="text-gray-300">(123) 456-7890</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-start space-x-3"
                                        variants={itemVariants}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p className="text-amber-400 font-medium mb-1">Email</p>
                                            <p className="text-gray-300">contact@example.com</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-start space-x-3"
                                        variants={itemVariants}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <p className="text-amber-400 font-medium mb-1">Location</p>
                                            <p className="text-gray-300">123 Business Ave, Suite 100<br />New York, NY 10001</p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <div className="mt-12 space-x-4">
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <svg className="h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <svg className="h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <svg className="h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <div className="p-8 md:w-2/3">
                                {formStatus.submitted ? (
                                    <motion.div
                                        className="h-full flex flex-col items-center justify-center text-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h3 className="text-2xl font-medium text-gray-900 mb-2">Thank You!</h3>
                                        <p className="text-gray-600 mb-6">Your message has been received. We'll respond as soon as possible.</p>
                                        <button
                                            onClick={() => setFormStatus({ submitted: false, submitting: false, error: null })}
                                            className="bg-gray-900 text-white py-2 px-6 hover:bg-gray-800 transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        className="space-y-6"
                                        onSubmit={handleSubmit}
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <motion.div variants={itemVariants}>
                                            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                                Full Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none focus:ring-0"
                                                placeholder="Your name"
                                            />
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none focus:ring-0"
                                                placeholder="your@email.com"
                                            />
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none focus:ring-0"
                                                placeholder="How can we help you?"
                                            />
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none focus:ring-0"
                                                placeholder="Your message here..."
                                            ></textarea>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <button
                                                type="submit"
                                                disabled={formStatus.submitting}
                                                className={`w-full bg-gray-900 text-white py-3 font-medium hover:bg-gray-800 transition-colors ${formStatus.submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                            >
                                                {formStatus.submitting ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </motion.div>
                                    </motion.form>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;