import { ChangeEvent, useEffect, useState } from "react"
import { useProductContext } from "../context/ProductsProvider"
import { ProductsList } from "../types"
import { ORDER_BY } from "../constants/order"

export const useProductsFilters = (initialOrder: string) => {
  const { productsRender, setProductsRender } = useProductContext()
  const [selectValue, setSelectValue] = useState<string>(initialOrder)


  useEffect(() => {
    const orderProducts = (products: ProductsList[]): ProductsList[] => {
      if (selectValue === ORDER_BY.POSITION) {
        return products.slice().sort((a, b) => {
          return a.productId - b.productId
        })
      }

      return products.slice().sort((a, b) => {
        if (selectValue === ORDER_BY.NAME) {
          return a.product.localeCompare(b.product)
        } else if (selectValue === ORDER_BY.HIGHER_PRICE) {
          return b.price - a.price
        } else {
          return a.price - b.price
        }
      })
    }

    setProductsRender(orderProducts(productsRender))
  }, [selectValue, setProductsRender])

  const handleChangeSelectFilterPrice = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value)
  }

  return {
    selectValue,
    handleChangeSelectFilterPrice,
  }
}
