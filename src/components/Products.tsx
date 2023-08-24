import type { Products } from '../types.d.ts'
import { useProductsQuantity } from '../hooks/useProductsQuantity.ts';
import { Main, ProductsListUl, ProductsListli, Img, ProductTitle, ProductPrice, ContainerInfo, ContainerButton, ButtonQuantity, ButtonBuy, NavLinkStyled } from '../style/ProductsStyle.ts';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductsProvider.tsx';


export function Products() {
  const { products } = useProductContext()
  const { handleClickQuantity, handleMouseDownQuantity, handleMouseUpQuantity, handleClickBuy } = useProductsQuantity()

  const { category, page } = useParams()

  const productsPerPage = 28;
  const intPage = page ? parseInt(page) : 1
  const startIndex = (intPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage

  const lenProducts = products.length
  const renderProducts = products.slice(startIndex, endIndex)


  return (
    <Main>
      {Array.from(
        { length: Math.ceil(lenProducts / productsPerPage) },
        (_, index) => (
          <NavLinkStyled
            key={index + 1}
            to={`/products/${category ? category + '/' : ''}${index + 1}`}
          >
            {index + 1}
          </NavLinkStyled>
        )
      )}

      <ProductsListUl>
        {renderProducts.map((product) => (
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
        ))}
      </ProductsListUl>
    </Main>
  )
}
