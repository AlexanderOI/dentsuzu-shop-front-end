import type { Products } from '../types.d.ts'
import { useProductsAmount } from '../hooks/useProductsAmount.ts';
import { Main, ProductsListUl, ProductsListli, Img, ProductTitle, ProductPrice, ContainerInfo, ContainerButton, ButtonAmounts, ButtonBuy, NavLinkStyled } from '../style/ProductsStyle.ts';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductsProvider.tsx';


export function Products() {
  const { products } = useProductContext()
  const { amount, handleClickAmount, handleMouseDownAmount, handleMouseUpAmount, handleClickBuy } = useProductsAmount(products)

  const { category, page } = useParams()

  const productsPerPage = 28;
  const intPage = page ? parseInt(page) : 1
  const startIndex = (intPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  console.log(category, page)


  return (
    <Main>
      {Array.from(
        { length: Math.ceil(products.length / productsPerPage) },
        (_, index) => (
          <NavLinkStyled
            key={index + 1}
            to={`/products/${category ? category + '/' : ''}${index + 1}`}
          >
            {index + 1}
          </NavLinkStyled>
        )
      )};

      <ProductsListUl>
        {products.slice(startIndex, endIndex).map((product) => (
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
