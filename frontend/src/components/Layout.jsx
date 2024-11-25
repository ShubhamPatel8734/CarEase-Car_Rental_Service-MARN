import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components/index.js'
import '../components/Layout.css'

  const Layout = () => {
    return (
      <>
        <Header/>
        <Outlet />
        <Footer />
      </>
    )
  }

export default Layout