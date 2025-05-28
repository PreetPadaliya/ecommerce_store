

import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const Dashboard = () => {
    // Dashboard state management
    const [activeTab, setActiveTab] = useState('overview');
    const [timeRange, setTimeRange] = useState('week');
    const [isLoading, setIsLoading] = useState(true);
    const [notifications, setNotifications] = useState([
        { id: 1, type: 'order', message: 'New order received #ORD-2947', time: '10 mins ago', read: false },
        { id: 2, type: 'inventory', message: 'Low stock alert: Wireless Headphones', time: '1 hour ago', read: false },
        { id: 3, type: 'customer', message: 'New customer registration', time: '3 hours ago', read: true },
        { id: 4, type: 'return', message: 'Return request #RTN-4872 received', time: '5 hours ago', read: true }
    ]);

    // Sales data
    const [salesData, setSalesData] = useState({
        daily: 2840,
        weekly: 14950,
        monthly: 58200,
        total: 847650
    });

    // Simulate loading data
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Chart data
    const revenueData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Revenue',
                data: [3800, 4200, 3950, 5100, 4800, 6200, 5700],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: true
            }
        ]
    };

    const ordersData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Orders',
                data: [24, 32, 27, 35, 28, 48, 42],
                backgroundColor: '#3b82f6',
                borderRadius: 6,
                maxBarThickness: 25
            }
        ]
    };

    const categoryData = {
        labels: ['Electronics', 'Fashion', 'Home', 'Beauty', 'Sports'],
        datasets: [
            {
                data: [35, 25, 18, 12, 10],
                backgroundColor: [
                    '#3b82f6', // blue
                    '#10b981', // green
                    '#f59e0b', // amber
                    '#8b5cf6', // purple
                    '#ef4444'  // red
                ],
                borderWidth: 0
            }
        ]
    };

    // Recent orders data
    const recentOrders = [
        { id: 'ORD-2947', customer: 'John Doe', date: '2023-05-28', amount: 249.99, status: 'Delivered' },
        { id: 'ORD-2946', customer: 'Jane Smith', date: '2023-05-28', amount: 189.50, status: 'Processing' },
        { id: 'ORD-2945', customer: 'Alex Johnson', date: '2023-05-27', amount: 99.99, status: 'Shipped' },
        { id: 'ORD-2944', customer: 'Michael Brown', date: '2023-05-27', amount: 329.99, status: 'Delivered' },
        { id: 'ORD-2943', customer: 'Emma Wilson', date: '2023-05-26', amount: 124.50, status: 'Processing' }
    ];

    // Top selling products
    const topProducts = [
        { id: 1, name: 'Wireless Headphones', sold: 245, revenue: 24480, inventory: 58 },
        { id: 2, name: 'Smart Watch', sold: 187, revenue: 28043, inventory: 42 },
        { id: 3, name: 'Designer Handbag', sold: 143, revenue: 28596, inventory: 37 },
        { id: 4, name: 'Running Shoes', sold: 132, revenue: 11878, inventory: 64 },
        { id: 5, name: 'Coffee Maker', sold: 97, revenue: 11640, inventory: 29 }
    ];

    // Get status color
    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-100 text-green-800';
            case 'Processing': return 'bg-blue-100 text-blue-800';
            case 'Shipped': return 'bg-amber-100 text-amber-800';
            case 'Cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    // Get notification icon
    const getNotificationIcon = (type) => {
        switch (type) {
            case 'order':
                return (
                    <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                );
            case 'inventory':
                return (
                    <div className="p-2 rounded-full bg-amber-100 text-amber-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                    </div>
                );
            case 'customer':
                return (
                    <div className="p-2 rounded-full bg-green-100 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                );
            case 'return':
                return (
                    <div className="p-2 rounded-full bg-red-100 text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                        </svg>
                    </div>
                );
            default:
                return null;
        }
    };

    // Loading skeleton component
    const Skeleton = ({ className }) => (
        <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">E-commerce Dashboard</h1>
                        <p className="text-gray-600 mt-1">Welcome back, Admin</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
                        <div className="relative">
                            <button
                                className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
                                onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                {notifications.some(n => !n.read) && (
                                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                        {notifications.filter(n => !n.read).length}
                                    </span>
                                )}
                            </button>
                        </div>
                        <div>
                            <select
                                className="bg-white p-2.5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 w-full"
                                value={timeRange}
                                onChange={(e) => setTimeRange(e.target.value)}
                            >
                                <option value="today">Today</option>
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                                <option value="year">This Year</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {isLoading ? (
                        Array(4).fill(0).map((_, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <Skeleton className="h-6 w-24 mb-4" />
                                <Skeleton className="h-10 w-32 mb-2" />
                                <Skeleton className="h-4 w-20" />
                            </div>
                        ))
                    ) : (
                        <>
                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Daily Sales</p>
                                        <h3 className="text-2xl font-bold text-gray-800 mt-1">${salesData.daily.toLocaleString()}</h3>
                                        <p className="text-green-500 text-sm font-medium flex items-center mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                            </svg>
                                            4.5% from yesterday
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-full bg-blue-50 text-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Orders</p>
                                        <h3 className="text-2xl font-bold text-gray-800 mt-1">158</h3>
                                        <p className="text-green-500 text-sm font-medium flex items-center mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                            </svg>
                                            8.2% from yesterday
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-full bg-amber-50 text-amber-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Customers</p>
                                        <h3 className="text-2xl font-bold text-gray-800 mt-1">2,584</h3>
                                        <p className="text-green-500 text-sm font-medium flex items-center mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                            </svg>
                                            12.5% from last month
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-full bg-green-50 text-green-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Conversion Rate</p>
                                        <h3 className="text-2xl font-bold text-gray-800 mt-1">3.6%</h3>
                                        <p className="text-red-500 text-sm font-medium flex items-center mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                            0.8% from yesterday
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-full bg-purple-50 text-purple-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Tabs */}
                <div className="mb-8">
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px overflow-x-auto scrollbar-hide">
                            <button
                                className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                onClick={() => setActiveTab('overview')}
                            >
                                Overview
                            </button>
                            <button
                                className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'analytics' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                onClick={() => setActiveTab('analytics')}
                            >
                                Analytics
                            </button>
                            <button
                                className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'orders' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                onClick={() => setActiveTab('orders')}
                            >
                                Orders
                            </button>
                            <button
                                className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'products' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                onClick={() => setActiveTab('products')}
                            >
                                Products
                            </button>
                            <button
                                className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'customers' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                onClick={() => setActiveTab('customers')}
                            >
                                Customers
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Main Dashboard Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Charts */}
                    <div className="lg:col-span-2 space-y-8">
                        {isLoading ? (
                            <>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <Skeleton className="h-6 w-48 mb-6" />
                                    <Skeleton className="h-64 w-full" />
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <Skeleton className="h-6 w-48 mb-6" />
                                    <Skeleton className="h-64 w-full" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Revenue Overview</h2>
                                    <div className="h-80">
                                        <Line
                                            data={revenueData}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                scales: {
                                                    y: {
                                                        beginAtZero: true,
                                                        grid: {
                                                            drawBorder: false,
                                                        },
                                                        ticks: {
                                                            callback: function (value) {
                                                                return '$' + value.toLocaleString();
                                                            }
                                                        }
                                                    },
                                                    x: {
                                                        grid: {
                                                            display: false,
                                                        }
                                                    }
                                                },
                                                plugins: {
                                                    legend: {
                                                        display: false,
                                                    },
                                                    tooltip: {
                                                        callbacks: {
                                                            label: function (context) {
                                                                return `Revenue: $${context.raw.toLocaleString()}`;
                                                            }
                                                        }
                                                    }
                                                },
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Orders</h2>
                                        <div className="h-64">
                                            <Bar
                                                data={ordersData}
                                                options={{
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                    scales: {
                                                        y: {
                                                            beginAtZero: true,
                                                            grid: {
                                                                drawBorder: false,
                                                            }
                                                        },
                                                        x: {
                                                            grid: {
                                                                display: false,
                                                            }
                                                        }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false,
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales by Category</h2>
                                        <div className="h-64 flex items-center justify-center">
                                            <div style={{ width: '100%', maxWidth: '220px' }}>
                                                <Doughnut
                                                    data={categoryData}
                                                    options={{
                                                        responsive: true,
                                                        maintainAspectRatio: false,
                                                        cutout: '70%',
                                                        plugins: {
                                                            legend: {
                                                                position: 'bottom',
                                                                labels: {
                                                                    usePointStyle: true,
                                                                    padding: 20,
                                                                    font: {
                                                                        size: 12
                                                                    }
                                                                }
                                                            },
                                                            tooltip: {
                                                                callbacks: {
                                                                    label: function (context) {
                                                                        return `${context.label}: ${context.raw}%`;
                                                                    }
                                                                }
                                                            }
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Right Column - Recent Activity */}
                    <div className="space-y-8">
                        {isLoading ? (
                            <>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <Skeleton className="h-6 w-48 mb-6" />
                                    {Array(4).fill(0).map((_, index) => (
                                        <div key={index} className="flex items-start gap-4 mb-4">
                                            <Skeleton className="h-12 w-12 rounded-full" />
                                            <div className="flex-1">
                                                <Skeleton className="h-4 w-2/3 mb-2" />
                                                <Skeleton className="h-3 w-1/2" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Notifications */}
                                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
                                        <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                                            Mark all as read
                                        </button>
                                    </div>
                                    <div className="space-y-4">
                                        {notifications.map((notification) => (
                                            <div
                                                key={notification.id}
                                                className={`flex items-start gap-4 p-3 rounded-lg ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
                                            >
                                                {getNotificationIcon(notification.type)}
                                                <div className="flex-1 min-w-0">
                                                    <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-800 font-medium'}`}>
                                                        {notification.message}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                                </div>
                                                <button className="text-gray-400 hover:text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full mt-4 text-center text-sm text-blue-600 hover:text-blue-800 transition-colors">
                                        View all notifications
                                    </button>
                                </div>

                                {/* Recent Orders */}
                                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
                                        <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                                            View All
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead>
                                                <tr className="text-left text-xs text-gray-500 border-b">
                                                    <th className="py-3 px-4 font-medium">ID</th>
                                                    <th className="py-3 px-4 font-medium">Customer</th>
                                                    <th className="py-3 px-4 font-medium">Amount</th>
                                                    <th className="py-3 px-4 font-medium">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {recentOrders.slice(0, 4).map((order) => (
                                                    <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 text-sm">
                                                        <td className="py-3 px-4 font-medium text-blue-600">
                                                            {order.id}
                                                        </td>
                                                        <td className="py-3 px-4 text-gray-800">
                                                            {order.customer}
                                                        </td>
                                                        <td className="py-3 px-4 text-gray-800">
                                                            ${order.amount}
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(order.status)}`}>
                                                                {order.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Top Products */}
                                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-lg font-semibold text-gray-800">Top Products</h2>
                                        <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                                            View All
                                        </button>
                                    </div>
                                    <div className="space-y-4">
                                        {topProducts.slice(0, 4).map((product) => (
                                            <div key={product.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                                <div className="flex items-center">
                                                    <div className="w-2 h-10 bg-blue-500 rounded-full mr-4"></div>
                                                    <div>
                                                        <h3 className="text-sm font-medium text-gray-800 mb-1">{product.name}</h3>
                                                        <p className="text-xs text-gray-500">Sold: {product.sold} units</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-medium text-gray-800">${product.revenue.toLocaleString()}</p>
                                                    <p className="text-xs text-gray-500">Stock: {product.inventory}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
