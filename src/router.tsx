import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import HomePage from "./pages/HomePage"
import CheckoutPage from "./pages/CheckoutPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },
])

export default router
