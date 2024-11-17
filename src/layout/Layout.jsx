import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <div className=''>
                <Navbar />
            </div>
            <div className='flex-1 overflow-y-auto overflow-x-hidden'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
