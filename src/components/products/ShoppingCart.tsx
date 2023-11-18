import { useShoppingCartContext } from '../../context/ShoppingCartProvider'
import { useProductsQuantityCart } from '../../hooks/useShoppingCart'

import { styled } from 'styled-components';

export const ViewCart = styled.div`
  position: fixed;
  top: 155px;
  background-color: #fff;
  width: 370px;
  height: 500px;
  border: none;
  box-shadow: 5px 5px 10px #888888;
  border-radius: 20px;
  left: 50%;
  transform: translate(-50%);
`

export const H3 = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00508b;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #fff;
  height: 30px;
  border-bottom: 1px solid #000;
`

export const UlShoppingCart = styled.div`
  width: 100%;
  height: 410px;
  overflow: hidden;
  overflow-y: auto;
`

export const Li = styled.li`
  display: flex;
  padding: 5px;
`

export const Img = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 5px;
  border: 1px solid #333;
`

export const DivInfo = styled.div`
  position: relative;
  width: 200px;
`
export const SpanName = styled.span`
  font-size: 12px;
`
export const SpanPrice = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  font-size: 16px;
`
export const DivButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`
export const Button = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
`

export const DivTotalPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50px;
  border-top: 1px solid #000;

  span {
    padding: 5px;
  }
  button {
    width: 100px;
    height: 25px;
    border: none;
    background-color: #00508b;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #00308b;
    }
  }
`

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