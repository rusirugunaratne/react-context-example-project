import { createContext } from "react"
import type { Item } from "../types/Item"

export interface CartContextType {
  cartItems: Item[]
  addToCart: (item: Item) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)
