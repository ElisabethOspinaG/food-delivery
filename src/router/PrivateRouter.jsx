import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = ({isAutentication}) => {
  return (
    <div>{isAutentication ?<Outlet/>:<Navigate to="/user"/>}</div>
  )
}

export default PrivateRouter;