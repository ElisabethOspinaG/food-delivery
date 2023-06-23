import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <div>NavBar</div>
        <Outlet/>
    </>
  )
}

export default Layout