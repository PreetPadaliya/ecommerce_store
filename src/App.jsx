import Navbar from "./components/navbar"
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
