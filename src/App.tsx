import styled from 'styled-components'
import { sectionProducts } from './json/products.ts'
import { RenderProducts } from './components/Products'
import { ProductsList } from './types'
import { ChangeEvent, useState } from 'react'

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

  const DivFilters = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items:center;
  padding-left: 50px;
  padding-right: 50px;

  `

  const [filters, setFilters] = useState({
    category: 'all',
    orderPrice: "mayor"
  })

  const [seclectValue, setSeclectValue] = useState<string>()

  const filterProducts = (products: ProductsList[]): ProductsList[] => {
    return products.slice().sort((a, b) => {
      if (filters.orderPrice === "mayor") {
        return b.price - a.price
      } else {
        return a.price - b.price
      }
    })

  }

  const handleChangeSelectFilterPrice = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSeclectValue(selectedValue);

    if (selectedValue === 'mayor') {
      setFilters({ category: 'all', orderPrice: 'mayor' });
    } else {
      setFilters({ category: 'all', orderPrice: 'menor' });
    }
  }

  const productsRender = filterProducts(sectionProducts.Almacén['Aderezos/Condimentos'])

  return (
    <>
      <Header>
        <h1>Dentzusu Shop</h1>
        <DivCarrito>
          <span>Ver carrito</span>
        </DivCarrito>
      </Header>
      <DivFilters>
        <input type="text" placeholder='Buscar producto' />
        <select value={seclectValue} onChange={handleChangeSelectFilterPrice}>
          <option value="mayor">De mayor a menor</option>
          <option value="menor">De menor a mayor</option>
        </select>
      </DivFilters>
      <RenderProducts products={productsRender} />
    </>
  )
}

export default App
