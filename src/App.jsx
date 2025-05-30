import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Contact from "./components/Contact"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
