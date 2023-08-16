import { useRef, useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartProvider"


export const useProductsAmountCart = () => {
  const { setProductsCart, setAmountCart } = useContext(ShoppingCartContext)
  const timerIdRef = useRef<number>(0)

  const handleClickAmount = (productId: number, sum: number, stock: number) => {
    setAmountCart((prevAmounts) => {
      const newAmount = prevAmounts[productId] + sum
      if (newAmount < 0) {
        setProductsCart(prevProductsCart => prevProductsCart.filter(product => product.productId !== productId))
      }

      if (newAmount > stock) return prevAmounts

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

  const handleClickBuyCancel = (productId: number) => {
    setProductsCart(prevProductsCart => prevProductsCart.filter(product => product.productId !== productId))
    setAmountCart(prevAmountCart => {
      return {
        ...prevAmountCart,
        [productId]: 0
      }
    })
  }

  return { handleClickAmount, handleMouseDownAmount, handleMouseUpAmount, handleClickBuyCancel }
}
