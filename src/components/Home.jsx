import React from 'react'

const Home = () => {
    const products = [
        {
            id: 1,
            title: "Product 1",
            description: "This is a sample description for the first product.",
            price: "$19.99 - $49.99",
            rating: "4.5",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 2,
            title: "Product 2",
            description: "This is a sample description for the second product.",
            price: "$29.99 - $59.99",
            rating: "4.2",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 3,
            title: "Product 3",
            description: "This is a sample description for the third product.",
            price: "$24.99 - $54.99",
            rating: "4.7",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 4,
            title: "Product 4",
            description: "This is a sample description for the fourth product.",
            price: "$15.49 - $45.49",
            rating: "4.0",
            image: "https://via.placeholder.com/300",
        },
    ];
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                    >
                        <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.title}</div>
                            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-blue-600">{product.price}</span>
                                <span className="text-yellow-500 text-sm">⭐ {product.rating}/5</span>
                            </div>
                        </div>
                        <div className="px-6 py-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300">
                                View Products
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home
