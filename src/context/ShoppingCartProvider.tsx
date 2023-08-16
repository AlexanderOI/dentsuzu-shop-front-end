import { ReactNode, createContext, useState } from "react";
import { ProductsList } from "../types";

type ShoppingCartContextType = {
  productsCart: ProductsList[];
  amountCart: AmountType;
  setProductsCart: React.Dispatch<React.SetStateAction<ProductsList[]>>;
  setAmountCart: React.Dispatch<React.SetStateAction<AmountType>>;
};

const initialShoppingCartContext: ShoppingCartContextType = {
  productsCart: [],
  amountCart: {},
  setProductsCart: () => { },
  setAmountCart: () => { },
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>(
  initialShoppingCartContext
);

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type AmountType = {
  [key: number]: number;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
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
