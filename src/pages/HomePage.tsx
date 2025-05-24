// src/pages/HomePage.tsx
import { items } from "../data/items"
import ItemCard from "../components/ItemCard"
import type { Item } from "../types/Item"
import useCart from "../context/useCart"

const HomePage = () => {
 const {addToCart} = useCart()

  const handleAddToCart = (item: Item) => {
    console.log("Added to cart:", item)
    addToCart(item)
  }

  return (
    <div className='min-h-screen bg-gray-100 py-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>Shop Items</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
