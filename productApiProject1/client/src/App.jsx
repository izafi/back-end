import React from 'react'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Product from './pages/Products'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            </Route>
        </Routes>
      
    </div>
  )
}

export default App
