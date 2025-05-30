import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define initial state
const initialState = {
    items: [],
    itemCount: 0,
    total: 0,
    shipping: 15.00,
    tax: 0,
    checkoutState: {
        shippingInfo: null,
        paymentInfo: null,
        orderComplete: false,
        orderNumber: null
    }
};

// Create context
const CartContext = createContext(initialState);

// Reducer function
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);

            // If item exists, update quantity
            if (existingItemIndex > -1) {
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += action.payload.quantity || 1;

                return {
                    ...state,
                    items: updatedItems,
                    itemCount: state.itemCount + (action.payload.quantity || 1)
                };
            }

            // Otherwise add new item
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
                itemCount: state.itemCount + (action.payload.quantity || 1)
            };
        }

        case 'REMOVE_ITEM': {
            const existingItem = state.items.find(item => item.id === action.payload);

            if (!existingItem) return state;

            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                itemCount: state.itemCount - existingItem.quantity
            };
        }

        case 'UPDATE_QUANTITY': {
            const { id, quantity } = action.payload;
            if (quantity < 1) return state;

            const existingItem = state.items.find(item => item.id === id);
            if (!existingItem) return state;

            const quantityDifference = quantity - existingItem.quantity;

            return {
                ...state,
                items: state.items.map(item =>
                    item.id === id ? { ...item, quantity } : item
                ),
                itemCount: state.itemCount + quantityDifference
            };
        }

        case 'CLEAR_CART':
            return {
                ...initialState
            };
        case 'UPDATE_TOTALS':
            const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
            const tax = subtotal * 0.08; // 8% tax

            return {
                ...state,
                tax,
                total: subtotal + tax + state.shipping
            };

        case 'SAVE_SHIPPING_INFO':
            return {
                ...state,
                checkoutState: {
                    ...state.checkoutState,
                    shippingInfo: action.payload
                }
            };

        case 'SAVE_PAYMENT_INFO':
            return {
                ...state,
                checkoutState: {
                    ...state.checkoutState,
                    paymentInfo: action.payload
                }
            };

        case 'COMPLETE_ORDER':
            return {
                ...state,
                checkoutState: {
                    ...state.checkoutState,
                    orderComplete: true,
                    orderNumber: action.payload
                }
            };

        case 'RESET_CHECKOUT':
            return {
                ...state,
                checkoutState: {
                    shippingInfo: null,
                    paymentInfo: null,
                    orderComplete: false,
                    orderNumber: null
                }
            };

        default:
            return state;
    }
};

// Provider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Calculate totals whenever items change
    useEffect(() => {
        dispatch({ type: 'UPDATE_TOTALS' });
    }, [state.items]);

    // Add item to cart
    const addItem = (product, quantity = 1) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: { ...product, quantity }
        });
    };

    // Remove item from cart
    const removeItem = (id) => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        });
    };

    // Update item quantity
    const updateQuantity = (id, quantity) => {
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { id, quantity }
        });
    };
    // Clear cart
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    // Save shipping information
    const saveShippingInfo = (shippingInfo) => {
        dispatch({
            type: 'SAVE_SHIPPING_INFO',
            payload: shippingInfo
        });
    };

    // Save payment information
    const savePaymentInfo = (paymentInfo) => {
        dispatch({
            type: 'SAVE_PAYMENT_INFO',
            payload: paymentInfo
        });
    };

    // Complete order
    const completeOrder = (orderNumber) => {
        dispatch({
            type: 'COMPLETE_ORDER',
            payload: orderNumber
        });
    };

    // Reset checkout state
    const resetCheckout = () => {
        dispatch({ type: 'RESET_CHECKOUT' });
    };

    // Values to provide
    const value = {
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        saveShippingInfo,
        savePaymentInfo,
        completeOrder,
        resetCheckout
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook for using the cart context
export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
};

export default CartContext;
