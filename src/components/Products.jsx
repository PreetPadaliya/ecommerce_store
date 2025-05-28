import React, { useState } from 'react'

const ProductCard = ({ image, title, price, rating, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >            <div className="relative overflow-hidden h-56">
                <img
                    className="w-full h-full object-cover"
                    src={image || "https://via.placeholder.com/300"}
                    alt={title}
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                </div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
                <div className="mb-2 flex items-center">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="text-gray-600 text-xs ml-1">({rating})</span>
                    </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">{title || "Product Title"}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
                    {description || "Product description goes here. This is a sample description for the product."}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-blue-600">${price || "19.99"}</span>
                    <button className="bg-blue-50 hover:bg-blue-500 text-blue-500 hover:text-white border border-blue-500 font-semibold py-1 px-3 rounded-full text-sm transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

const Products = () => {
    // State for filters and sorting
    const [category, setCategory] = useState('all');
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');    // Sample product data - extended with more products and categories
    const products = [
        {
            id: 1,
            title: "Wireless Headphones",
            price: "99.99",
            rating: "4.7",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
            description: "Premium wireless headphones with noise cancellation and long battery life.",
            category: "electronics"
        },
        {
            id: 2,
            title: "Smart Watch",
            price: "149.99",
            rating: "4.5",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            description: "Track your fitness, receive notifications, and more with this sleek smart watch.",
            category: "electronics"
        },
        {
            id: 3,
            title: "Portable Speaker",
            price: "79.99",
            rating: "4.2",
            image: "https://images.unsplash.com/photo-1564424224827-cd24b8915874",
            description: "Waterproof Bluetooth speaker with 24-hour battery life and crystal clear sound.",
            category: "electronics"
        },
        {
            id: 4,
            title: "Designer Handbag",
            price: "199.99",
            rating: "4.8",
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
            description: "Elegant designer handbag made with premium materials, perfect for any occasion.",
            category: "fashion"
        },
        {
            id: 5,
            title: "Running Shoes",
            price: "89.99",
            rating: "4.6",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            description: "Lightweight, comfortable running shoes designed for maximum performance.",
            category: "fashion"
        },
        {
            id: 6,
            title: "Coffee Maker",
            price: "129.99",
            rating: "4.4",
            image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
            description: "Programmable coffee maker with multiple brew settings for the perfect cup every time.",
            category: "home"
        },
        {
            id: 7,
            title: "Yoga Mat",
            price: "29.99",
            rating: "4.3",
            image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2",
            description: "Non-slip, eco-friendly yoga mat with extra cushioning for comfort during workouts.",
            category: "sports"
        },
        {
            id: 8,
            title: "Board Game Set",
            price: "49.99",
            rating: "4.9",
            image: "https://images.unsplash.com/photo-1606503153255-59d8b2e20d83",
            description: "Family board game collection with 5 classic games for hours of entertainment.",
            category: "toys"
        },
        {
            id: 9,
            title: "Digital Camera",
            price: "599.99",
            rating: "4.8",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
            description: "High-resolution digital camera with 4K video recording and image stabilization.",
            category: "electronics"
        },
        {
            id: 10,
            title: "Designer Sunglasses",
            price: "159.99",
            rating: "4.5",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
            description: "Stylish, UV-protective designer sunglasses, perfect for any outfit.",
            category: "fashion"
        },
        {
            id: 11,
            title: "Smart Home Speaker",
            price: "129.99",
            rating: "4.4",
            image: "https://images.unsplash.com/photo-1589003511208-e687553c4b44",
            description: "Voice-controlled smart speaker with premium sound and home automation features.",
            category: "electronics"
        },
        {
            id: 12,
            title: "Fitness Tracker",
            price: "79.99",
            rating: "4.3",
            image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558",
            description: "Water-resistant fitness tracker to monitor heart rate, steps, and sleep quality.",
            category: "sports"
        },
        {
            id: 13,
            title: "Wooden Chess Set",
            price: "89.99",
            rating: "4.9",
            image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461",
            description: "Handcrafted wooden chess set with weighted pieces and felt-lined storage.",
            category: "toys"
        }
    ];

    // Filter products based on selected category
    const filteredProducts = products.filter(product => {
        return category === 'all' || product.category === category;
    });

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'priceAsc') return parseFloat(a.price) - parseFloat(b.price);
        if (sortBy === 'priceDesc') return parseFloat(b.price) - parseFloat(a.price);
        if (sortBy === 'rating') return parseFloat(b.rating) - parseFloat(a.rating);
        return 0; // Default - featured/original order
    });

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Shop Our Products</h1>
                    <p className="text-gray-600">Discover our curated collection of premium products</p>
                </div>

                {/* Filters and Sorting Section */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                        {/* Category Filters */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-gray-700 font-medium">Category:</span>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setCategory('all')}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${category === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => setCategory('electronics')}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${category === 'electronics' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                >
                                    Electronics
                                </button>
                                <button
                                    onClick={() => setCategory('fashion')}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${category === 'fashion' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                >
                                    Fashion
                                </button>
                                <button
                                    onClick={() => setCategory('home')}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${category === 'home' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => setCategory('sports')}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${category === 'sports' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                >
                                    Sports
                                </button>
                                <button
                                    onClick={() => setCategory('toys')}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${category === 'toys' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                >
                                    Toys
                                </button>
                            </div>
                        </div>

                        {/* Sorting and View Options */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center">
                                <label htmlFor="sort" className="text-gray-700 font-medium mr-2">Sort:</label>
                                <select
                                    id="sort"
                                    className="bg-gray-100 border-0 rounded-md py-1.5 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="featured">Featured</option>
                                    <option value="priceAsc">Price: Low to High</option>
                                    <option value="priceDesc">Price: High to Low</option>
                                    <option value="rating">Top Rated</option>
                                </select>
                            </div>

                            <div className="flex border border-gray-200 rounded-md overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Display */}
                {sortedProducts.length > 0 ? (
                    <div className={viewMode === 'grid'
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        : "flex flex-col space-y-4"
                    }>
                        {sortedProducts.map(product => (
                            viewMode === 'grid' ? (
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating}
                                    image={product.image}
                                    description={product.description}
                                />
                            ) : (
                                <div key={product.id} className="flex bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-40 h-40">
                                        <img className="w-full h-full object-cover" src={product.image} alt={product.title} />
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                                        <div className="flex items-center mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                            <span className="text-gray-600 text-sm ml-1">({product.rating})</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-bold text-blue-600">${product.price}</span>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
                        <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                )}

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                    <nav className="flex items-center">
                        <button className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                            Previous
                        </button>
                        <button className="px-3 py-1 border-t border-b border-gray-300 bg-blue-50 text-blue-600 font-medium">
                            1
                        </button>
                        <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                            2
                        </button>
                        <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                            3
                        </button>
                        <button className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                            Next
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Products;