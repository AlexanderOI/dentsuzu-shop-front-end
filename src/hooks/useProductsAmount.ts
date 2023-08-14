import { useRef, useState } from "react"
import { ProductsList } from "../types"

export function useProductsAmount(products: ProductsList[]) {
  const [amount, setAmounts] = useState<{ [productId: number]: number }>(
    products.reduce((acc, product) => {
      acc[product.productId] = 0
      return acc
    }, {} as { [productId: number]: number })
  )
  console.log(amount)
  const timerIdRef = useRef<number>(0)

  const handleClickAmount = (productId: number, sum: number, stock: number) => {
    setAmounts((prevAmounts) => {
      const newAmount = prevAmounts[productId] + sum
      if (newAmount < 0 || newAmount > stock) return prevAmounts

      return {
        ...prevAmounts,
        [productId]: prevAmounts[productId] + sum
      }
    })
  }

  const handleMouseDownAmount = (productId: number, sum: number, stock: number) => {
    timerIdRef.current = setInterval(() => {
      handleClickAmount(productId, sum, stock)
    }, 100)
  }

  const handleMouseUpAmount = () => {
    clearInterval(timerIdRef.current)
    timerIdRef.current = 0
  }

  const handleClickBuy = (productId: number) => {
    setAmounts((prevAmounts) => {
      return {
        ...prevAmounts,
        [productId]: 0
      }
    })
  }

  return { amount, handleClickAmount, handleMouseDownAmount, handleMouseUpAmount, handleClickBuy }
}