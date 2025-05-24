// src/components/Navbar.tsx
import { Link, useNavigate } from "react-router-dom"
import useCart from "../context/useCart"

const COMPANY_NAME = "MyShop"

const Navbar = () => {
  const { cartItems } = useCart()
  const navigate = useNavigate()

  const handleCartClick = () => {
    navigate("/checkout")
  }

  return (
    <nav className='fixed top-0 left-0 w-full h-16 bg-white shadow z-50 flex items-center justify-between px-6'>
      {/* Left: Home Icon and Company Name */}
      <div className='flex items-center gap-3'>
        <Link to='/' aria-label='Home' className='hover:text-blue-700 transition'>
          {/* Home SVG Icon */}
          <svg className='w-7 h-7 text-blue-700' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
            <path d='M3 12l9-9 9 9' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M9 21V9h6v12' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </Link>
        <span className='text-2xl font-bold text-blue-700'>{COMPANY_NAME}</span>
      </div>

      {/* Right: Cart Icon with Badge */}
      <button
        className='relative flex items-center focus:outline-none'
        onClick={handleCartClick}
        aria-label='View cart'
      >
        {/* Cart SVG Icon */}
        <svg className='w-7 h-7 text-gray-700' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
          <path d='M3 3h2l.4 2M7 13h10l4-8H5.4' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='7' cy='21' r='1.5' />
          <circle cx='17' cy='21' r='1.5' />
        </svg>
        {/* Badge */}
        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5'>
          {cartItems.length}
        </span>
      </button>
    </nav>
  )
}

export default Navbar
