import { ProductsListli, Img, ProductTitle, ProductPrice, ContainerInfo, ContainerButton, ButtonQuantity, ButtonBuy } from '../style/ProductsStyle.ts'
import { ProductsList } from '../types'

type ProductProps = {
  product: ProductsList
  handleClickQuantity: (productId: number, sum: number, stock: number) => void
  handleMouseDownQuantity: (productId: number, sum: number, stock: number) => void
  handleMouseUpQuantity: () => void
  handleClickBuy: (addedProduct: ProductsList) => void
}

export function Product({ product, handleClickQuantity, handleMouseDownQuantity, handleMouseUpQuantity, handleClickBuy }: ProductProps) {
  return (
    <ProductsListli key={product.productId}>
      <ContainerInfo>
        <Img src={product.img} alt={product.alt} />
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