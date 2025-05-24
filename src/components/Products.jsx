import React from 'react'

const ProductCard = ({ image, title, price, rating, description }) => {
    return (
        <div className="max-w-[270px] rounded max-h-45 overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <img className="w-full h-20 object-cover" src={image || "https://via.placeholder.com/300"} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-800">{title || "Product Title"}</div>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {description || "Product description goes here. This is a sample description for the product."}
                </p>
                <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-blue-600">${price || "19.99"}</span>
                    <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-gray-600 text-sm">{rating || "4.5"}/5</span>

                    </div>
                </div>
            </div>
            <div className="px-6 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

const Products = () => {
    // Sample product data
    const products = [
        {
            id: 1,
            title: "Wireless Headphones",
            price: "99.99",
            rating: "4.7",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
            description: "Premium wireless headphones with noise cancellation and long battery life."
        },
        {
            id: 2,
            title: "Smart Watch",
            price: "149.99",
            rating: "4.5",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            description: "Track your fitness, receive notifications, and more with this sleek smart watch."
        },
        {
            id: 3,
            title: "Portable Speaker",
            price: "79.99",
            rating: "4.2",
            image: "https://images.unsplash.com/photo-1564424224827-cd24b8915874",
            description: "Waterproof Bluetooth speaker with 24-hour battery life and crystal clear sound."
        },
        {

            id: 4,
            title: "Portable Speaker",
            price: "79.99",
            rating: "4.2",
            image: "https://images.unsplash.com/photo-1564424224827-cd24b8915874",
            description: "Waterproof Bluetooth speaker with 24-hour battery life and crystal clear sound."
        }
    ];

    return (
        <div className="py-8 px-4">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        image={product.image}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;