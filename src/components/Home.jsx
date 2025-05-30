import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewsletterSubscribe from './NewsletterSubscribe';
import ScrollToTop from './ScrollToTop';
import LoadingSpinner from './LoadingSpinner';
import FeaturedCarousel from './FeaturedCarousel';
import { useCart } from '../context/CartContext';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { addItem } = useCart();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const products = [
        {
            id: 1,
            title: "Product 1",
            description: "This is a sample description for the first product.",
            price: "$19.99 - $49.99",
            rating: "4.5",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        },
        {
            id: 2,
            title: "Product 2",
            description: "This is a sample description for the second product.",
            price: "$29.99 - $59.99",
            rating: "4.2",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        },
        {
            id: 3,
            title: "Product 3",
            description: "This is a sample description for the third product.",
            price: "$24.99 - $54.99",
            rating: "4.7",
            image: "https://images.unsplash.com/photo-1564424224827-cd24b8915874",
        },
        {
            id: 4,
            title: "Product 4",
            description: "This is a sample description for the fourth product.",
            price: "$15.49 - $45.49",
            rating: "4.0",
            image: "https://img.odcdn.com.br/wp-content/uploads/2024/09/iphone-16-cores-1920x1080.jpg",
        },
        {
            id: 5,
            title: "Product 5",
            description: "This is a sample description for the fifth product.",
            price: "$18.99 - $48.99",
            rating: "4.1",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        },
        {
            id: 6,
            title: "Product 6",
            description: "This is a sample description for the sixth product.",
            price: "$22.99 - $52.99",
            rating: "4.3",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
        },
    ];

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
    };

    const heroVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.7
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: { scale: 0.95 }
    };

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
            transition: { type: "spring", stiffness: 100, damping: 10 }
        },
        hover: {
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    }; return (
        <>            {!isLoaded && <LoadingSpinner />}
            <motion.div
                className="bg-gray-50 min-h-screen"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
            >{/* Hero Section with Animation */}
                <motion.div
                    className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 px-4 text-center relative overflow-hidden"
                    variants={heroVariants}
                >
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                            opacity: [0.5, 0.6, 0.5]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            filter: "blur(3px)",
                            opacity: 0.2,
                            mixBlendMode: "overlay"
                        }}
                    />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mb-4 font-serif tracking-tight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Premium Products for Discerning Customers
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl mb-8 font-light"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Discover our curated collection of high-quality merchandise at competitive prices.
                        </motion.p>
                        <motion.button
                            className="bg-amber-500 text-gray-900 font-semibold py-3 px-8 rounded-sm hover:bg-amber-400 transition duration-300"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        >
                            Browse Collection
                        </motion.button>
                    </div>
                </motion.div>            {/* Banner with Animation */}
                <motion.div
                    className="bg-gray-100 py-4 text-center border-y border-gray-200"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <div className="container mx-auto">
                        <motion.p
                            className="text-gray-700 font-medium"
                            animate={{ scale: [1, 1.01, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <span className="hidden md:inline">Special Promotion:</span> Complimentary Shipping on Orders Above $50
                        </motion.p>
                    </div>
                </motion.div>

                {/* Featured Carousel */}
                <div className="container mx-auto py-12 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <FeaturedCarousel />
                    </motion.div>
                </div>

                {/* Featured Products Section */}
                <div className="container mx-auto py-12 px-4">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-10 text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Featured Products
                    </motion.h2>                    {/* Products Grid with Staggered Animation */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                    >
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                className="bg-white border border-gray-100 overflow-hidden shadow-sm flex flex-col relative"
                                variants={itemVariants}
                                whileHover="hover"
                                layout
                            >
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        className="w-full h-56 object-cover"
                                        src={product.image}
                                        alt={product.title}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <motion.div
                                        className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 tracking-wide"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + product.id * 0.1 }}
                                    >
                                        FEATURED
                                    </motion.div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="font-medium text-base mb-1 text-gray-900">{product.title}</h3>
                                    <p className="text-gray-500 text-sm mb-4 flex-grow font-light">{product.description}</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-base font-semibold text-gray-900">{product.price}</span>
                                        <span className="text-amber-500 text-sm flex items-center">
                                            <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </motion.svg>
                                            {product.rating}
                                        </span>
                                    </div>                                    <motion.button
                                        className="mt-auto bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 w-full transition duration-300"
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => addItem({
                                            id: product.id,
                                            title: product.title,
                                            price: parseFloat(product.price ? product.price.split(' ')[0].replace('$', '') : 19.99),
                                            image: product.image
                                        })}
                                    >
                                        Add to Cart
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>                {/* Features Section */}
                <motion.div
                    className="bg-gray-50 py-24 border-y border-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="container mx-auto px-4">
                        <motion.h2
                            className="text-2xl font-semibold text-center mb-14 text-gray-900 uppercase tracking-wider"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Our Commitment to Excellence
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                {
                                    icon: "svg",
                                    title: "Premium Shipping",
                                    description: "Complimentary expedited shipping on all orders exceeding $50."
                                },
                                {
                                    icon: "svg",
                                    title: "Hassle-Free Returns",
                                    description: "30-day satisfaction guarantee with simple return process."
                                },
                                {
                                    icon: "svg",
                                    title: "Secure Transactions",
                                    description: "Enterprise-grade security with multiple payment options."
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-8 shadow-sm border border-gray-50 text-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                >
                                    {index === 0 && (
                                        <motion.svg className="h-12 w-12 mx-auto mb-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </motion.svg>
                                    )}
                                    {index === 1 && (
                                        <motion.svg className="h-12 w-12 mx-auto mb-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </motion.svg>
                                    )}
                                    {index === 2 && (
                                        <motion.svg className="h-12 w-12 mx-auto mb-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </motion.svg>
                                    )}
                                    <h3 className="text-lg font-medium mb-3 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 font-light">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials Section with Animation */}
                <motion.div
                    className="bg-gray-100 py-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="container mx-auto px-4">
                        <motion.h2
                            className="text-3xl font-bold text-center mb-12 text-gray-800"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            What Our Customers Say
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    text: "I love shopping here! The products are high quality and the delivery is always on time.",
                                    author: "Sarah J.",
                                    rating: 5
                                },
                                {
                                    text: "Great customer service and easy returns policy. Will definitely shop again!",
                                    author: "Mike T.",
                                    rating: 4
                                },
                                {
                                    text: "The best online shopping experience I've had in years. Highly recommended!",
                                    author: "Emma R.",
                                    rating: 5
                                }
                            ].map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-lg"
                                    initial={{ opacity: 0, y: 50, rotateY: 30 }}
                                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -10,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                >
                                    <div className="mb-4 flex">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.7 + (index * 0.2) + (i * 0.1) }}
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </motion.svg>
                                        ))}
                                    </div>
                                    <motion.p
                                        className="text-gray-600 italic mb-4"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.7, delay: 0.5 + (index * 0.2) }}
                                        viewport={{ once: true }}
                                    >
                                        "{testimonial.text}"
                                    </motion.p>
                                    <p className="text-gray-800 font-semibold">{testimonial.author}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>                {/* Call to Action with Animation */}
                <motion.div
                    className="bg-gray-900 text-white py-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <motion.h2
                            className="text-3xl font-semibold mb-6 tracking-wide"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Experience Premium Quality
                        </motion.h2>
                        <motion.p
                            className="text-lg mb-8 max-w-2xl mx-auto text-gray-300 font-light"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Join our exclusive clientele and discover why industry professionals trust our selection for reliability, quality, and exceptional service.
                        </motion.p>
                        <motion.button
                            className="bg-white text-gray-900 font-medium py-3 px-8 border border-white hover:bg-transparent hover:text-white transition-all duration-300"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            View Collection
                        </motion.button>
                    </div>
                </motion.div>
                {/* Newsletter Subscription */}
                <NewsletterSubscribe />

                {/* Scroll To Top Button */}            <ScrollToTop />
            </motion.div>
        </>
    );
};

export default Home;
