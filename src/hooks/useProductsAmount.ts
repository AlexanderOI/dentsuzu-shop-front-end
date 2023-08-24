import { useRef, useState } from "react"
import { useShoppingCartContext } from "../context/ShoppingCartProvider"
import { useProductContext } from "../context/ProductsProvider"

export const useProductsAmount = () => {
  const { products, setProducts } = useProductContext()
  const [amount, setAmounts] = useState<{ [productId: number]: number }>(
    products.reduce((acc, product) => {
      acc[product.productId] = 0
      return acc
    }, {} as { [productId: number]: number })
  )

  const timerIdRef = useRef<number>(0)

  const { productsCart, amountCart, setProductsCart, setAmountCart } = useShoppingCartContext()

  const handleClickAmount = (productId: number, sum: number, stock: number) => {
    setAmounts((prevAmounts) => {
      const newAmountCart = amountCart[productId] ? amountCart[productId] : 0

      const newAmountComp = prevAmounts[productId] + sum + newAmountCart
      if (newAmountComp < 0 || newAmountComp > stock) return prevAmounts

      const newAmount = prevAmounts[productId] + sum
      if (newAmount < 0 || newAmount > stock) return prevAmounts

      return {
        ...prevAmounts,
        [productId]: prevAmounts[productId] + sum
      }
    })
  }

  const addProducts = (productId: number) => {
    const newAmountCart = amountCart[productId] ? amountCart[productId] : 0
    if (amount[productId] === 0) return

    const productAlreadyInCart = productsCart.some(product => product.productId === products[productId - 1].productId)

    if (!productAlreadyInCart) {
      setProductsCart((prevProductsCart) => [...prevProductsCart, products[productId - 1]])
    }

    setAmountCart((prevAmounCart) => ({
      ...prevAmounCart,
      [productId]: amount[productId] + newAmountCart
    }))
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
    addProducts(productId)

    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [productId]: 0
    }))
  }

  return { amount, handleClickAmount, handleMouseDownAmount, handleMouseUpAmount, handleClickBuy }
}