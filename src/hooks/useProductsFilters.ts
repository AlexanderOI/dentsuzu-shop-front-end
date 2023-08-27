import { ChangeEvent, useEffect, useState } from "react"
import { useProductContext } from "../context/ProductsProvider"
import { ProductsList } from "../types"
import { ORDER_BY } from "../constants/order"
import { sectionProducts } from "../json/products"
import { useParams } from "react-router-dom"


export function useProductsFilters(initialOrder: string) {
  const { products, setProducts } = useProductContext()
  const [selectValue, setSelectValue] = useState<string>(initialOrder)
  const { section, category } = useParams()

  useEffect(() => {
    const orderProducts = (products: ProductsList[]): ProductsList[] => {
      if (selectValue === ORDER_BY.POSITION) {
        const categoryPage = category ? category : "Aderezos-Condimentos"
        const sectionPage = section ? section : "Almacén"
        return sectionProducts[sectionPage][categoryPage]
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

    setProducts(orderProducts(products))
  }, [selectValue, setProducts])

  const handleChangeSelectFilterPrice = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value)
  }

  return {
    selectValue,
    handleChangeSelectFilterPrice,
  };
}
