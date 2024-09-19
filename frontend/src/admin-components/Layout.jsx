import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../admin-components/index'
import '../admin-components/Layout.css'

const Layout = () => {
  return (
    <>
        <div className='adminpage'>
          <Sidebar />
          <Outlet />
        </div>
    </>
  )
}

export default Layout