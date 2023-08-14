import type { Products } from '../types.d.ts'
import { useProductsAmount } from '../hooks/useProductsAmount.ts';
import { Main, ProductsListUl, ProductsListli, Img, ProductTitle, ProductPrice, ContainerInfo, ContainerButton, ButtonAmounts, ButtonBuy } from '../style/ProductsStyle.ts';

export function Products({ products }: Products) {
  const { amount, handleClickAmount, handleMouseDownAmount, handleMouseUpAmount, handleClickBuy } = useProductsAmount(products)

  return (
    <Main>
      <ProductsListUl>
        {products.slice(0, 25).map((product) => (
          <ProductsListli key={product.productId}>
            <ContainerInfo>
              <Img src={product.img} alt={product.alt} />
              <ProductPrice>Gs. {product.price}</ProductPrice>
              <ProductTitle>{product.product}</ProductTitle>
            </ContainerInfo>
            <ContainerButton>
              <ButtonAmounts
                onClick={() => handleClickAmount(product.productId, -1, product.stock)}
                onMouseDown={() => handleMouseDownAmount(product.productId, -1, product.stock)}
                onMouseUp={handleMouseUpAmount}
              >
                {'<'}
              </ButtonAmounts>
              <span>{amount[product.productId]}</span>
              <ButtonAmounts
                onClick={() => handleClickAmount(product.productId, 1, product.stock)}
                onMouseDown={() => handleMouseDownAmount(product.productId, 1, product.stock)}
                onMouseUp={handleMouseUpAmount}
              >
                {'>'}
              </ButtonAmounts>
              <ButtonBuy onClick={() => handleClickBuy(product.productId)}>Al carro</ButtonBuy>

            </ContainerButton>
          </ProductsListli>
        ))}
      </ProductsListUl>
    </Main>
  )
}
