import React from 'react'
import { Outlet } from 'react-router'

const App = () => {
  return (

    <div className='min-h-screen flex items-center justify-center bg-gray-300'>
      <Outlet />
    </div>
  )
}

export default App