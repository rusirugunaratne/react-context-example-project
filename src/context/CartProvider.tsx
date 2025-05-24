import { useState } from "react"
import type { Item } from "../types/Item"
import { CartContext } from "./cartContext"

interface CartProviderProps {
    children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<Item[]>([])

    const addToCart = (item: Item) => {
        setCartItems([...cartItems, item])
    }

    const removeFromCart = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCartItems([])
    }

    return (
        <CartContext.Provider 
            value={{ cartItems, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider