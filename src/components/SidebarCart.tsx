// src/components/SidebarCart.tsx
import React from "react"
import useCart from "../context/useCart"

const SidebarCart: React.FC = () => {
  const { cartItems } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <aside className='fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-white shadow-lg z-40 flex flex-col'>
      <div className='p-6 border-b'>
        <h2 className='text-2xl font-bold'>Your Cart</h2>
      </div>
      <div className='flex-1 overflow-y-auto p-6'>
        {cartItems.length === 0 ? (
          <div className='text-gray-500 text-center mt-10'>Your cart is empty.</div>
        ) : (
          <ul className='space-y-4'>
            {cartItems.map((item) => (
              <li key={item.id} className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <img src={item.image} alt={item.name} className='w-12 h-12 object-cover rounded' />
                  <span className='font-medium'>{item.name}</span>
                </div>
                <span className='text-gray-700 font-semibold'>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='p-6 border-t'>
        <div className='flex justify-between items-center'>
          <span className='text-lg font-bold'>Total</span>
          <span className='text-lg font-bold'>${total.toFixed(2)}</span>
        </div>
      </div>
    </aside>
  )
}

export default SidebarCart
