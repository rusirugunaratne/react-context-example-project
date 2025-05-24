// src/layouts/Layout.tsx
import React from "react"
import Navbar from "../components/Navbar"
import SidebarCart from "../components/SidebarCart"
import { Outlet, useLocation } from "react-router-dom"

const Layout: React.FC = () => {
  const location = useLocation()
  const hideSidebar = location.pathname === "/checkout"

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <div className='flex pt-16'>
        {/* Main content area */}
        <main className={`flex-1 transition-all duration-300 ${!hideSidebar ? "pr-80" : ""}`}>
          <Outlet />
        </main>
        {/* Sidebar (hidden on /checkout) */}
        {!hideSidebar && <SidebarCart />}
      </div>
    </div>
  )
}

export default Layout
