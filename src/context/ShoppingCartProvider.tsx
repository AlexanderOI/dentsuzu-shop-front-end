import { ReactNode, createContext, useContext, useState } from "react"
import { ProductsList } from "../types"

type AmountType = {
  [key: number]: number
};

type ShoppingCartContextType = {
  productsCart: ProductsList[]
  amountCart: AmountType
  setProductsCart: React.Dispatch<React.SetStateAction<ProductsList[]>>
  setAmountCart: React.Dispatch<React.SetStateAction<AmountType>>
};

const initialShoppingCartContext: ShoppingCartContextType = {
  productsCart: [],
  amountCart: {},
  setProductsCart: () => { },
  setAmountCart: () => { },
};

const ShoppingCartContext = createContext<ShoppingCartContextType>(
  initialShoppingCartContext
);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [productsCart, setProductsCart] = useState(
    initialShoppingCartContext.productsCart
  );
  const [amountCart, setAmountCart] = useState(
    initialShoppingCartContext.amountCart
  );

  return (
    <ShoppingCartContext.Provider
      value={{ productsCart, amountCart, setProductsCart, setAmountCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext)
}