import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Categories = () => {
    const { addItem } = useCart();
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [loadingTrending, setLoadingTrending] = useState(true);
    const [notification, setNotification] = useState({ show: false, message: '' });
    
    const categories = [
        {
            id: 'electronics',
            name: 'Electronics',
            description: 'Discover the latest tech gadgets and electronic devices',
            image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            featured: true
        },
        {
            id: 'fashion',
            name: 'Fashion',
            description: 'Explore trendy clothing, shoes, and accessories',
            image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            featured: true
        },
        {
            id: 'home',
            name: 'Home & Garden',
            description: 'Find everything you need for your home and garden',
            image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            featured: true
        },
        {
            id: 'toys',
            name: 'Toys & Games',
            description: 'Fun toys and games for all ages',
            image: 'https://images.unsplash.com/photo-1536846511313-4b07b637bff9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            featured: false
        },
        {
            id: 'beauty',
            name: 'Beauty & Personal Care',
            description: 'Premium beauty products and personal care essentials',
            image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            featured: false
        },
        {
            id: 'sports',
            name: 'Sports & Outdoors',
            description: 'Sports gear and equipment for outdoor activities',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            featured: false
        },
    ];

    // Sample trending products
    const trendingProductsData = [
        {
            id: 'tp1',
            name: 'Premium Wireless Earbuds',
            price: 79.99,
            image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.8,
            category: 'electronics',
            hot: true
        },
        {
            id: 'tp2',
            name: 'Designer Leather Bag',
            price: 129.99,
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.7,
            category: 'fashion',
            hot: true
        },
        {
            id: 'tp3',
            name: 'Smart Home Speaker',
            price: 149.99,
            image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.9,
            category: 'electronics',
            hot: false
        },
        {
            id: 'tp4',
            name: 'Premium Coffee Set',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            rating: 4.6,
            category: 'home',
            hot: true
        }
    ];

    useEffect(() => {
        // Simulate API call to get trending products
        setTimeout(() => {
            setTrendingProducts(trendingProductsData);
            setLoadingTrending(false);
        }, 800);
    }, []);

    // Show notification when adding to cart
    const handleAddToCart = (product) => {
        addItem({
            id: product.id,
            title: product.name,
            price: product.price,
            image: product.image
        });
        
        setNotification({
            show: true,
            message: `${product.name} added to your cart!`
        });
        
        // Hide notification after 2.5 seconds
        setTimeout(() => {
            setNotification({ show: false, message: '' });
        }, 2500);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="container mx-auto px-4">
                {/* Notification */}
                {notification.show && (
                    <div className="fixed top-20 right-4 bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in-out">
                        {notification.message}
                    </div>
                )}
                
                {/* Page Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Categories</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Explore our curated collection of products across various categories. From cutting-edge electronics to stylish fashion items, we have everything you need.</p>
                </div>

                {/* Special Deal Banner */}
                <motion.div 
                    className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-lg mb-12 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Special Summer Collection</h2>
                            <p className="mb-4 md:mb-0">Get up to 40% off on selected items. Limited time offer!</p>
                        </div>
                        <Link to="/products" className="bg-white text-blue-700 px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
                            Shop Now
                        </Link>
                    </div>
                </motion.div>

                {/* Featured Categories Grid */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {categories.filter(category => category.featured).map((category, index) => (
                        <motion.div 
                            key={category.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="h-56 overflow-hidden">
                                <img 
                                    src={category.image} 
                                    alt={category.name} 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                                <p className="text-gray-600 mb-4">{category.description}</p>
                                <Link 
                                    to={`/categories/${category.id}`}
                                    className="inline-block bg-gray-900 text-white px-4 py-2 font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Explore {category.name}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* All Categories List */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">All Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                    {categories.map(category => (
                        <motion.div 
                            key={category.id}
                            className="bg-white p-4 rounded-md flex items-center shadow-sm hover:shadow-md transition-shadow"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img 
                                src={category.image} 
                                alt={category.name} 
                                className="w-16 h-16 object-cover rounded-md mr-4"
                            />
                            <div>
                                <h3 className="font-medium text-gray-900">{category.name}</h3>
                                <Link 
                                    to={`/categories/${category.id}`}
                                    className="text-blue-600 text-sm hover:text-blue-800 transition-colors"
                                >
                                    View Products
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trending Products Section */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Trending Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {loadingTrending ? (
                        // Skeleton loading placeholders
                        Array(4).fill().map((_, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="h-48 bg-gray-200 animate-pulse"></div>
                                <div className="p-4">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                                    <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-4"></div>
                                    <div className="flex justify-between items-center">
                                        <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-8 w-1/4 bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        trendingProducts.map((product, index) => (
                            <motion.div 
                                key={product.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                {product.hot && (
                                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
                                        HOT
                                    </div>
                                )}
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg 
                                                key={i} 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                                viewBox="0 0 20 20" 
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="text-gray-500 text-xs ml-1">({product.rating})</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</span>
                                        <button 
                                            className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>

                {/* Browse All Products Link */}
                <div className="text-center mt-8 mb-16">
                    <Link 
                        to="/products" 
                        className="inline-block bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
                    >
                        Browse All Products
                    </Link>
                </div>
            </div>

            {/* Style for notification */}
            <style jsx="true">{`
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translateY(-10px); }
                    10% { opacity: 1; transform: translateY(0); }
                    90% { opacity: 1; }
                    100% { opacity: 0; }
                }
                .animate-fade-in-out {
                    animation: fadeInOut 2.5s ease-in-out;
                }
                .animate-fade-out {
                    opacity: 0;
                    transition: opacity 0.5s;
                }
            `}</style>
        </div>
    );
};

export default Categories;