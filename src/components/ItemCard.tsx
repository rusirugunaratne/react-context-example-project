// src/components/ItemCard.tsx
import React from "react"
import type { Item } from "../types/Item"

interface ItemCardProps {
  item: Item
  onAddToCart: (item: Item) => void
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onAddToCart }) => (
  <div className='bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-64'>
    <img src={item.image} alt={item.name} className='w-32 h-32 object-cover mb-4 rounded' />
    <h2 className='text-lg font-semibold mb-2'>{item.name}</h2>
    <p className='text-gray-700 mb-4'>${item.price.toFixed(2)}</p>
    <button
      className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition'
      onClick={() => onAddToCart(item)}
    >
      Add to Cart
    </button>
  </div>
)

export default ItemCard
