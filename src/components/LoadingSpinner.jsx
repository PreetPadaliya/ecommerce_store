import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80 z-50">
            <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="w-16 h-16 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear"
                    }}
                />
                <motion.p
                    className="mt-4 text-blue-600 font-medium"
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5
                    }}
                >
                    Loading amazing products...
                </motion.p>
            </motion.div>
        </div>
    );
};

export default LoadingSpinner;
