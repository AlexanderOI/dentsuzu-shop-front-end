import { useContext } from 'react';
import { ViewCart, H3, Li, Img, DivInfo, SpanName, SpanPrice, DivButton, Button } from '../style/ShoppingCartStyle';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';



interface ShoppingCartProps {
  isVisible: boolean
}

export function ShoppingCart({ isVisible }: ShoppingCartProps) {
  const { productsCart, setProductsCart } = useContext(ShoppingCartContext)
  return (
    <>
      <ViewCart isVisible={isVisible}>
        <H3>Lista de compra</H3>
        <ul>
          {productsCart.slice(0, 10).map((product) => (
            <Li key={product.productId}>
              <Img src={product.img} alt={product.alt} />

              <DivInfo>
                <SpanName>{product.product}</SpanName>
                <SpanPrice>{product.price}</SpanPrice>
              </DivInfo>

              <DivButton>
                <Button>{'<'}</Button>
                <span>0</span>
                <Button>{'>'}</Button>
                <Button>{'x'}</Button>
              </DivButton>
            </Li>
          ))}
        </ul>
      </ViewCart>
    </>
  )
}