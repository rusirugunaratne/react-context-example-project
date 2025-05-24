// src/data/cart.ts

import type { Item } from "../types/Item"
import { items } from "./items"

export const cartItems: Item[] = [...items]
