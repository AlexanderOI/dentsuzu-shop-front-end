import { ReactNode, createContext, useState } from "react";
import { ProductsList } from "../types";

type ShoppingCartContextType = {
  productsCart: ProductsList[];
  setProductsCart: React.Dispatch<React.SetStateAction<ProductsList[]>>;
};

const initialShoppingCartContext: ShoppingCartContextType = {
  productsCart: [],
  setProductsCart: () => { },
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>(initialShoppingCartContext);

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [productsCart, setProductsCart] = useState(initialShoppingCartContext.productsCart);

  return (
    <ShoppingCartContext.Provider value={{ productsCart, setProductsCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
