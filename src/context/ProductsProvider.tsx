import { ReactNode, createContext, useContext, useState } from "react";
import { ProductsList } from "../types";


type ProductsContextType = {
  products: ProductsList[]
  setProducts: React.Dispatch<React.SetStateAction<ProductsList[]>>
  productsRender: ProductsList[];
  setProductsRender: React.Dispatch<React.SetStateAction<ProductsList[]>>
};

const initialProductsContext: ProductsContextType = {
  products: [],
  setProducts: () => { },
  productsRender: [],
  setProductsRender: () => { }
}

const ProductsContext = createContext<ProductsContextType>(initialProductsContext)

export function ProductsProvider({ children }: { children: ReactNode; }) {
  const [products, setProducts] = useState(initialProductsContext.products)
  const [productsRender, setProductsRender] = useState(initialProductsContext.productsRender)

  return (
    <ProductsContext.Provider value={{ products, setProducts, productsRender, setProductsRender }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProductContext() {
  return useContext(ProductsContext)
}