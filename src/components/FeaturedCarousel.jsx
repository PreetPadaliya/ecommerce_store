import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturedCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const featuredItems = [
        {
            id: 1,
            title: "Summer Collection 2025",
            subtitle: "Hot styles for the season",
            image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            color: "from-blue-400 to-purple-500"
        },
        {
            id: 2,
            title: "New Tech Arrivals",
            subtitle: "Latest gadgets and accessories",
            image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
            color: "from-emerald-400 to-teal-500"
        },
        {
            id: 3,
            title: "Home & Living",
            subtitle: "Transform your space",
            image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            color: "from-amber-400 to-orange-500"
        }
    ];

    // Auto-advance the carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Go to next slide
    const nextSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Go to previous slide
    const prevSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1
        );
    };

    // Animation variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const [direction, setDirection] = useState(1);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 }
                    }}
                    className={`absolute inset-0 bg-gradient-to-r ${featuredItems[currentIndex].color} flex items-center justify-center`}
                >
                    <div className="relative w-full h-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${featuredItems[currentIndex].image})`, opacity: 0.8 }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold mb-4"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {featuredItems[currentIndex].title}
                            </motion.h2>
                            <motion.p
                                className="text-lg md:text-xl mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {featuredItems[currentIndex].subtitle}
                            </motion.p>
                            <motion.button
                                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                Discover Now
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <motion.button
                    className="bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setDirection(-1);
                        prevSlide();
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>
                <motion.button
                    className="bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setDirection(1);
                        nextSlide();
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                {featuredItems.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeaturedCarousel;
