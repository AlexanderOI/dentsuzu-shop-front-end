import { ViewCart, H3, Li, Img, DivInfo, SpanName, SpanPrice, DivButton, Button, DivTotalPrice, UlShoppingCart } from '../../assets/style/ShoppingCartStyle'
import { useShoppingCartContext } from '../../context/ShoppingCartProvider'
import { useProductsQuantityCart } from '../../hooks/useShoppingCart'

interface ShoppingCartProps {
  isVisible: boolean
}

export function ShoppingCart({ isVisible }: ShoppingCartProps) {
  const { productsCart } = useShoppingCartContext()
  const { handleClickQuantity, handleMouseDownQuantity, handleMouseUpQuantity, handleClickBuyCancel } = useProductsQuantityCart()

  const totalPrice: number = productsCart.reduce((accumulatorPrice, currenProduct) => {
    return accumulatorPrice + currenProduct.price * currenProduct.quantity
  }, 0)

  const totalPriceString: string = totalPrice.toLocaleString('es-ES')

  return (
    <>
      <ViewCart style={{ display: isVisible ? 'block' : 'none' }}>
        <H3>Lista de compra</H3>
        <UlShoppingCart>
          {productsCart.slice(0, 10).map((product) => (
            <Li key={product.productId}>
              <Img src={`http://localhost:3001/ProductoId - ${product.productId}.jpg`} alt={product.alt} />

              <DivInfo>
                <SpanName>{product.product}</SpanName>
                <SpanPrice>{product.price * product.quantity}</SpanPrice>
              </DivInfo>

              <DivButton>
                <Button
                  onClick={() => handleClickQuantity(product.productId, -1, product.stock)}
                  onMouseDown={() => handleMouseDownQuantity(product.productId, -1, product.stock)}
                  onMouseUp={handleMouseUpQuantity}
                >
                  {'<'}
                </Button>
                <span>{product.quantity}</span>
                <Button
                  onClick={() => handleClickQuantity(product.productId, 1, product.stock)}
                  onMouseDown={() => handleMouseDownQuantity(product.productId, 1, product.stock)}
                  onMouseUp={handleMouseUpQuantity}
                >
                  {'>'}
                </Button>
                <Button onClick={() => handleClickBuyCancel(product.productId)}>{'x'}</Button>
              </DivButton>
            </Li>
          ))}
        </UlShoppingCart>
        <DivTotalPrice>
          <span>Precio total: Gs. {totalPriceString}</span>
          <button>Comprar</button>
        </DivTotalPrice>
      </ViewCart>
    </>
  )
}