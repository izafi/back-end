import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import {Outlet} from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout
