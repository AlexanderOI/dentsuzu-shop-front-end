import { styled } from 'styled-components';
import { ProductsList } from '../types';


interface ShoppingCartProps {
  isVisible: boolean;
  products: ProductsList[];
}

interface ViewCartProps {
  isVisible: boolean;
}


const ViewCart = styled.div<ViewCartProps>`
display: ${props => (props.isVisible ? 'block' : 'none')};
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #fff;
width: 370px;
height: 500px;
border: 2px solid #233;
overflow-y: auto;
overflow-x: hidden;
`

const Li = styled.li`
display: flex;
padding: 5px;
`

const Img = styled.img`
width: 70px;
height: 70px;
margin-right: 5px;
border: 1px solid #333;
`

const DivInfo = styled.div`
position: relative;
width: 200px;
`
const SpanName = styled.span`
font-size: 12px;
`
const SpanPrice = styled.span`
display: block;
position: absolute;
bottom: 0;
font-size: 16px;
`
const DivButton = styled.div`
display: flex;
align-items: center;
flex-direction: row;
gap: 10px;
`
const Button = styled.button`
display: flex;
width: 20px;
height: 20px;
align-items: center;
justify-content: center;
`

export function ShoppingCart({ isVisible, products }: ShoppingCartProps) {
  return (
    <>
      <ViewCart isVisible={isVisible}>
        <strong>Lista de compra</strong>
        <ul>
          {products.slice(0, 10).map((product) => (
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