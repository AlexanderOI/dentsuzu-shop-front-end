import styled from 'styled-components'
import { ProductsList } from '../../types'

export const ProductsListli = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cfcecf;
  padding: 20px;
  font-weight: 300;
`

export const ContainerInfo = styled.div`
  display: inline-block;
  height: 90%;
`
export const DivConteinerImg = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding-bottom: 5px;
`

export const SpanStock = styled.span`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  color: #ff0000;
  padding:5px 45px 5px 45px;
`

export const Img = styled.img`
  background-color: #fff;
  width: 100%;
  height: 150px;
`

export const ProductTitle = styled.strong`
  display: block;
  font-size: 13px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ProductPrice = styled.span`
  margin-top: 5px;
  font-weight: bold;
`

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const ButtonQuantity = styled.button`
  cursor: pointer;
  width: 25px;
  height: 35px;
`
export const ButtonBuy = styled.button`
  cursor: pointer;
  width: 60px;
  height: 35px;
`

type ProductProps = {
  product: ProductsList
  handleClickQuantity: (productId: number, sum: number, stock: number) => void
  handleMouseDownQuantity: (productId: number, sum: number, stock: number) => void
  handleMouseUpQuantity: () => void
  handleClickBuy: (addedProduct: ProductsList) => void
}

export function Product({ product, handleClickQuantity, handleMouseDownQuantity, handleMouseUpQuantity, handleClickBuy }: ProductProps) {
  const dirImage = `http://localhost:3001/ProductoId - ${product.productId}.jpg`
  return (
    <ProductsListli key={product.productId}>
      <ContainerInfo>
        <Img src={dirImage} alt={product.alt} />
        <ProductPrice>Gs. {product.price}</ProductPrice>
        <ProductTitle>{product.product}</ProductTitle>
      </ContainerInfo>

      <ContainerButton>
        <ButtonQuantity
          onClick={() => handleClickQuantity(product.productId, -1, product.stock)}
          onMouseDown={() => handleMouseDownQuantity(product.productId, -1, product.stock)}
          onMouseUp={handleMouseUpQuantity}
        >
          {'<'}
        </ButtonQuantity>

        <span>{product.quantity}</span>

        <ButtonQuantity
          onClick={() => handleClickQuantity(product.productId, 1, product.stock)}
          onMouseDown={() => handleMouseDownQuantity(product.productId, 1, product.stock)}
          onMouseUp={handleMouseUpQuantity}
        >
          {'>'}
        </ButtonQuantity>
        <ButtonBuy onClick={() => handleClickBuy(product)}>Al carro</ButtonBuy>

      </ContainerButton>
    </ProductsListli>
  )

}