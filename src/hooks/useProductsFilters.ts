import { ChangeEvent, useEffect, useState } from "react"
import { useProductContext } from "../context/ProductsProvider"
import { ProductsList } from "../types"
import { sectionProducts } from "../json/products"
import { ORDER_BY } from "../constants/order"

export function useProductsFilters(initialOrder: string) {
  const { setProducts } = useProductContext()
  const [selectValue, setSelectValue] = useState<string>(initialOrder)

  useEffect(() => {
    const orderProducts = (products: ProductsList[]): ProductsList[] => {
      if (selectValue === ORDER_BY.POSITION) return products

      return products.slice().sort((a, b) => {
        if (selectValue === ORDER_BY.NAME) {
          return a.product.localeCompare(b.product)
        } else if (selectValue === ORDER_BY.HIGHER_PRICE) {
          return b.price - a.price
        } else {
          return a.price - b.price
        }
      });
    };

    setProducts(orderProducts(sectionProducts.Almacén["Aderezos/Condimentos"]))
  }, [selectValue, setProducts])

  const handleChangeSelectFilterPrice = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value)
  }

  return {
    selectValue,
    handleChangeSelectFilterPrice,
  };
}
