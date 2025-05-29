import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorTrail = ({ amount = 20 }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        // Update mouse position
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        // Add event listener
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Update trail points based on mouse position
    useEffect(() => {
        setTrail(prevTrail => {
            // Add current position to the beginning of the trail
            const newTrail = [mousePosition, ...prevTrail.slice(0, amount - 1)];
            return newTrail;
        });
    }, [mousePosition, amount]);

    return (
        <div className="pointer-events-none fixed inset-0 z-40">
            {trail.map((point, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                    style={{
                        left: point.x,
                        top: point.y,
                        width: `${Math.max(4, 16 - i * 0.8)}px`,
                        height: `${Math.max(4, 16 - i * 0.8)}px`,
                        opacity: 1 - i / amount,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                />
            ))}
        </div>
    );
};

export default CursorTrail;
