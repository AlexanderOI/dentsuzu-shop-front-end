import { useProductsQuantity } from '../hooks/useProductsQuantity.ts'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/ProductsProvider.tsx'
import { useEffect } from 'react'
import { sectionProducts } from '../json/products.ts'
import { Product } from '../components/products/Product.tsx'
import { PaginationProducts } from '../components/products/PaginationProducts.tsx'
import { styled } from 'styled-components'

export const Main = styled.main`
  display: inline-block;
  width: 80%;
  height: 100%;
  padding: 10px;
`

export const ProductsListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  list-style: none;
`

type PathState = {
  section: string
  category: string
  subCategory: string
}

export function Products({ setPath }: { setPath: React.Dispatch<React.SetStateAction<PathState>> }) {
  const { products, setProducts, productsRender, setProductsRender } = useProductContext()
  const { handleClickQuantity, handleMouseDownQuantity, handleMouseUpQuantity, handleClickBuy } = useProductsQuantity()

  const { section, category, subCategory, page, query } = useParams()
  const productsPerPage = 28
  const pageCurrent = page ? parseInt(page) : 1
  const lenProducts = products.length

  const filterPerCategory = (sectionPart: string, categoryPart: string, subCategoryPart: string) => {
    if (subCategory) {
      const newProductsFilter = sectionProducts[sectionPart][categoryPart].filter((product) => {
        return product.category === subCategoryPart
      })
      return newProductsFilter
    }
    if (query) {
      console.log(products)
      return products
    }

    return sectionProducts[sectionPart][categoryPart]
  }

  useEffect(() => {
    const sectionPart = section ? section : "Almacén"
    const categoryPart = category ? category : "Aderezos-Condimentos"
    const subCategoryPart = subCategory ? subCategory : "Todos"

    setPath({ section: sectionPart, category: categoryPart, subCategory: subCategoryPart })


    if (category !== categoryPart || subCategory !== subCategoryPart) {
      setProducts(filterPerCategory(sectionPart, categoryPart, subCategoryPart))
    }

    const startIndex = (pageCurrent - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage
    const newRenderProducts = products.slice(startIndex, endIndex)

    setProductsRender(newRenderProducts)
  }, [category, subCategory, page, section, setPath, products, pageCurrent, productsPerPage])


  const generateProductsUrl = (pageNumber: number): string => {
    if (query) {
      const queryPart = query ? `${query}/` : ''
      return `/search/${queryPart}${pageNumber}`
    }
    console.log(subCategory)
    const categoryPart = category ? `${category}/` : ''
    const subCategoryPart = subCategory ? `${subCategory}/` : ''

    return `/products/${section}/${categoryPart}${subCategoryPart}page/${pageNumber}`
  }

  return (
    <Main>
      <PaginationProducts totalPages={Math.ceil(lenProducts / productsPerPage)} generateUrl={generateProductsUrl} />

      <ProductsListUl>
        {productsRender.map((product) => (
          <Product
            key={product.productId}
            product={product}
            handleClickQuantity={handleClickQuantity}
            handleMouseDownQuantity={handleMouseDownQuantity}
            handleMouseUpQuantity={handleMouseUpQuantity}
            handleClickBuy={handleClickBuy}
          />
        ))}
      </ProductsListUl>
    </Main>
  )
}
