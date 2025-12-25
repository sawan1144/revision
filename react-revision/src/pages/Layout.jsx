import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='h-[100%]'>
        <Header />  
        <div className='h-[60vh]'><Outlet /></div>
        <div className="text-5xl h-[25vh] font-bold underline bg-amber-900 py-15">Footer</div>
    </div>
  )
}

export default Layout