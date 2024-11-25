import React from 'react'
import { Outlet } from 'react-router-dom'
import { User_Header, Page_Title, User_Footer, Navabr } from '../user-components/index.js'
import { Header } from '../components/index.js'
import '../components/Layout.css'


const Layout = () => {
  return (
    <>
      <User_Header/>
      <Page_Title />
      <Navabr/>
      <Outlet />
      <User_Footer />
    </>
  )
}

export default Layout