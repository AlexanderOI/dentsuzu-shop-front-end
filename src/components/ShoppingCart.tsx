import { useContext } from 'react';
import { ViewCart, H3, Li, Img, DivInfo, SpanName, SpanPrice, DivButton, Button } from '../style/ShoppingCartStyle';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';
import { useProductsAmountCart } from '../hooks/useProductsAmounCart';



interface ShoppingCartProps {
  isVisible: boolean
}

export function ShoppingCart({ isVisible }: ShoppingCartProps) {
  const { productsCart, amountCart } = useContext(ShoppingCartContext)
  const { handleClickAmount, handleMouseDownAmount, handleMouseUpAmount, handleClickBuyCancel } = useProductsAmountCart()

  const totalPrice: number = productsCart.reduce((accumulatorPrice, currenProduct) => {
    return accumulatorPrice + currenProduct.price * amountCart[currenProduct.productId]
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
                <SpanPrice>{product.price * amountCart[product.productId]}</SpanPrice>
              </DivInfo>

              <DivButton>
                <Button
                  onClick={() => handleClickAmount(product.productId, -1, product.stock)}
                  onMouseDown={() => handleMouseDownAmount(product.productId, -1, product.stock)}
                  onMouseUp={handleMouseUpAmount}
                >
                  {'<'}
                </Button>
                <span>{amountCart[product.productId]}</span>
                <Button
                  onClick={() => handleClickAmount(product.productId, 1, product.stock)}
                  onMouseDown={() => handleMouseDownAmount(product.productId, 1, product.stock)}
                  onMouseUp={handleMouseUpAmount}
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