import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import {Outlet} from "react-router-dom"

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout
