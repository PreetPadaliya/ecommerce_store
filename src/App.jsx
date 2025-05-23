import Navbar from "./components/navbar"
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import { Routes, Route, BrowserRouter } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
