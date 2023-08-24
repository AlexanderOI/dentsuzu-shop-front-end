import { ReactNode, createContext, useContext, useState } from "react"
import { ProductsList } from "../types"

type ShoppingCartContextType = {
  productsCart: ProductsList[]

  setProductsCart: React.Dispatch<React.SetStateAction<ProductsList[]>>
}

const initialShoppingCartContext: ShoppingCartContextType = {
  productsCart: [],
  setProductsCart: () => { }
}

const ShoppingCartContext = createContext<ShoppingCartContextType>(
  initialShoppingCartContext
)

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [productsCart, setProductsCart] = useState(
    initialShoppingCartContext.productsCart
  )

  return (
    <ShoppingCartContext.Provider
      value={{ productsCart, setProductsCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext)
}