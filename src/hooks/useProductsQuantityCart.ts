import { useRef } from "react"
import { useShoppingCartContext } from "../context/ShoppingCartProvider"


export const useProductsQuantityCart = () => {
  const { setProductsCart } = useShoppingCartContext()
  const timerIdRef = useRef<number>(0)

  const handleClickQuantity = (productId: number, sum: number, stock: number) => {
    setProductsCart((prevProductsCart) => {
      return prevProductsCart.map((productCart) => {
        if (productCart.productId !== productId) {
          return productCart
        }

        const newQuantity = productCart.quantity + sum
        if (newQuantity < 1 || newQuantity > stock) {
          return productCart
        }

        return {
          ...productCart,
          quantity: newQuantity,
        }
      })
    })
  }

  const handleMouseDownQuantity = (productId: number, sum: number, stock: number) => {
    timerIdRef.current = setInterval(() => {
      handleClickQuantity(productId, sum, stock)
    }, 100)
  }

  const handleMouseUpQuantity = () => {
    clearInterval(timerIdRef.current)
    timerIdRef.current = 0
  }

  const handleClickBuyCancel = (productId: number) => {
    setProductsCart(prevProductsCart => prevProductsCart.filter(product => product.productId !== productId))
  }

  return { handleClickQuantity, handleMouseDownQuantity, handleMouseUpQuantity, handleClickBuyCancel }
}
