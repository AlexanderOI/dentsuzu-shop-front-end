import { useRef } from "react"
import { useShoppingCartContext } from "../context/ShoppingCartProvider"
import { useProductContext } from "../context/ProductsProvider"
import { ProductsList } from "../types"

export const useProductsQuantity = () => {
  const { productsCart, setProductsCart } = useShoppingCartContext()
  const { productsRender, setProductsRender } = useProductContext()
  const timerIdRef = useRef<number>(0)

  const handleClickQuantity = (productId: number, sum: number, stock: number) => {
    setProductsRender((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.productId !== productId) {
          return product
        }

        const productCart = productsCart.find((cartItem) => cartItem.productId === productId)
        const newQuantityCart = productCart ? productCart.quantity : 0
        const newQuantityComp = product.quantity + sum + newQuantityCart

        if (newQuantityComp < 0 || newQuantityComp > stock) {
          return product
        }

        const newQuantity = product.quantity + sum
        if (newQuantity < 0 || newQuantity > stock) {
          return product
        }

        return {
          ...product,
          quantity: newQuantity,
        }
      })
    })
  }


  const addProducts = (addedProduct: ProductsList) => {
    if (addedProduct.quantity === 0) return

    const updatedProducts = productsRender.map(product => {
      if (product.productId === addedProduct.productId) {
        return {
          ...product,
          quantity: 0,
        }
      }

      return product
    })

    const productAlreadyInCart = productsCart.some(product => product.productId === addedProduct.productId)

    let updatedCart: ProductsList[]
    if (!productAlreadyInCart) {
      updatedCart = [...productsCart, addedProduct]
    } else {

      updatedCart = productsCart.map(productCart => {
        if (productCart.productId === addedProduct.productId) {
          const sumQuantity = productCart.quantity + addedProduct.quantity
          const quantity = sumQuantity >= addedProduct.stock ? addedProduct.stock : sumQuantity
          return {
            ...productCart,
            quantity: quantity,
          }
        }

        return productCart
      })
    }

    setProductsRender(updatedProducts)
    setProductsCart(updatedCart)
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

  const handleClickBuy = (addedProduct: ProductsList) => {
    addProducts(addedProduct)
  }

  return { handleClickQuantity, handleMouseDownQuantity, handleMouseUpQuantity, handleClickBuy }
}