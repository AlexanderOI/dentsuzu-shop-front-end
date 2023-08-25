import { ViewCart, H3, Li, Img, DivInfo, SpanName, SpanPrice, DivButton, Button } from '../style/ShoppingCartStyle';
import { useShoppingCartContext } from '../context/ShoppingCartProvider';
import { useProductsQuantityCart } from '../hooks/useShoppingCart';

interface ShoppingCartProps {
  isVisible: boolean
}

export function ShoppingCart({ isVisible }: ShoppingCartProps) {
  const { productsCart } = useShoppingCartContext()
  const { handleClickQuantity, handleMouseDownQuantity, handleMouseUpQuantity, handleClickBuyCancel } = useProductsQuantityCart()

  const totalPrice: number = productsCart.reduce((accumulatorPrice, currenProduct) => {
    return accumulatorPrice + currenProduct.price * currenProduct.quantity
  }, 0)

  return (
    <>
      <ViewCart style={{ display: isVisible ? 'block' : 'none' }}>
        <H3>Lista de compra</H3>
        <ul>
          {productsCart.slice(0, 10).map((product) => (
            <Li key={product.productId + 20000}>
              <Img src={product.img} alt={product.alt} />

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
        </ul>
        <div>
          <span>Total: {totalPrice}</span>
        </div>
      </ViewCart>
    </>
  )
}