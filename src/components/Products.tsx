import { useProductsQuantity } from '../hooks/useProductsQuantity.ts';
import { Main, ProductsListUl, ProductsListli, Img, ProductTitle, ProductPrice, ContainerInfo, ContainerButton, ButtonQuantity, ButtonBuy, NavLinkStyled } from '../style/ProductsStyle.ts';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductsProvider.tsx';
import { useEffect } from 'react';
import { sectionProducts } from '../json/products.ts';

type PathState = {
  section: string;
  category: string;
  subCategory: string
}

export function Products({ setPath }: { setPath: React.Dispatch<React.SetStateAction<PathState>> }) {
  const { products, setProducts, productsRender, setProductsRender } = useProductContext()
  const { handleClickQuantity, handleMouseDownQuantity, handleMouseUpQuantity, handleClickBuy } = useProductsQuantity()

  const { section, category, subCategory, page } = useParams()

  const productsPerPage = 28;
  const intPage = page ? parseInt(page) : 1
  const startIndex = (intPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage

  const lenProducts = products.length
  const renderProducts = products.slice(startIndex, endIndex)

  useEffect(() => {
    setProductsRender(renderProducts)
  }, [page])

  useEffect(() => {
    const sectionPage = section ? section : "Almacén"
    const categoryPage = category ? category : "Aderezos-Condimentos"
    const subCategoryPage = subCategory ? subCategory : "Todos"

    setPath({ section: sectionPage, category: categoryPage, subCategory: subCategoryPage })
    setProducts(sectionProducts[sectionPage][categoryPage])
  }, [category, subCategory])


  return (
    <Main>
      {Array.from(
        { length: Math.ceil(lenProducts / productsPerPage) },
        (_, index) => {
          const categoryPart = category ? `${category}/` : '';
          const subCategoryPart = subCategory ? `${subCategory}/` : '';
          const url = `/products/${section}/${categoryPart}${subCategoryPart}${index + 1}`;

          return (
            <NavLinkStyled key={index + 1} to={url}>
              {index + 1}
            </NavLinkStyled>
          );
        }
      )}

      <ProductsListUl>
        {productsRender.map((product) => (
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
