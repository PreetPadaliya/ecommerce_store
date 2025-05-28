import React from 'react'

const Home = () => {
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
            id: 5, // Corrected ID
            title: "Product 5", // Corrected title
            description: "This is a sample description for the fifth product.", // Corrected description
            price: "$18.99 - $48.99", // Corrected price
            rating: "4.1", // Corrected rating
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", // Example image
        },
        {
            id: 6, // Corrected ID
            title: "Product 6", // Corrected title
            description: "This is a sample description for the sixth product.", // Corrected description
            price: "$22.99 - $52.99", // Corrected price
            rating: "4.3", // Corrected rating
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f", // Example image
        },
    ];
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our E-Store!</h1>
                <p className="text-lg md:text-xl mb-8">Discover amazing products at unbeatable prices.</p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition duration-300">
                    Shop Now
                </button>
            </div>

            {/* Featured Products Section */}
            <div className="container mx-auto py-12 px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col"
                        >
                            <img className="w-full h-56 object-cover" src={product.image} alt={product.title} />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-bold text-xl mb-2 text-gray-800">{product.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xl font-bold text-blue-600">{product.price}</span>
                                    <span className="text-yellow-500 text-sm flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {product.rating}/5
                                    </span>
                                </div>
                                <button className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
