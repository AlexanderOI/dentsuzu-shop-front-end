import styled from 'styled-components'
import { sectionProducts } from './json/products.ts'
import { RenderProducts } from './components/Products'
import { Products, ProductsList } from './types'
import { useState } from 'react'

function App() {

  const Header = styled.header`
  display: flex;
  position: relative;
  background-color: #272727;
  color: #fff;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin: 0;
  `

  const DivCarrito = styled.div`
  position: absolute;
  cursor: pointer;
  padding: 20px;
  right: 0;
  `
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 20000
  })

  const filterProducts = (products: ProductsList[]): ProductsList[] => {
    return products.filter(product => {
      return (
        product.price < filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )

      )
    })
  }

  const products = filterProducts(sectionProducts.Almacén['Aderezos/Condimentos'])
  console.log(products)


  return (
    <>
      <Header>
        <h1>Dentzusu Shop</h1>
        <DivCarrito>
          <span>Ver carrito</span>
        </DivCarrito>
      </Header>
      <RenderProducts products={products} />
    </>
  )
}

export default App
