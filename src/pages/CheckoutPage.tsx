// src/pages/CheckoutPage.tsx
import React from "react"
import useCart from "../context/useCart"

const CheckoutPage: React.FC = () => {
  const { cartItems } = useCart()
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center py-8'>
      <h1 className='text-3xl font-bold mb-8'>Checkout</h1>

      <div className='bg-white rounded-lg shadow-md w-full max-w-xl p-6'>
        <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className='flex items-center justify-between py-4 border-b last:border-b-0'>
              <div className='flex items-center gap-4'>
                <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded' />
                <span className='font-medium'>{item.name}</span>
              </div>
              <span className='text-gray-700 font-semibold'>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className='flex justify-between items-center mt-6 pt-4 border-t'>
          <span className='text-lg font-bold'>Total</span>
          <span className='text-lg font-bold'>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
