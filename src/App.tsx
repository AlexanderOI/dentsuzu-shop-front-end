import { Header, DivCarrito, DivFilters, DivFiltersContainer, DivProducts, DivSection } from './AppStyle.ts'
import { sectionProducts } from './json/products.ts'
import { Products } from './components/Products'
import { ProductsList } from './types'
import { useProductsFilters } from './hooks/useProductsFilters.ts'
import { ShoppingCart } from './components/ShoppingCart'
import { useState } from 'react'
import { ShoppingCartProvider } from './context/ShoppingCartProvider.tsx'
import { Filters } from './components/Filters.tsx'

function App() {

  const { filters, selectValue, handleChangeSelectFilterPrice } = useProductsFilters('Position')
  const [isVisible, setIsVisible] = useState(false)

  const orderProducts = (products: ProductsList[]): ProductsList[] => {
    if (filters.order === 'position') return products

    return products.slice().sort((a, b) => {
      if (filters.order === 'name') {
        return a.product.localeCompare(b.product)
      } else if (filters.order === 'higher') {
        return b.price - a.price
      } else {
        return a.price - b.price
      }
    })
  }

  const productsRender = orderProducts(sectionProducts.Almacén['Aderezos/Condimentos'])

  const handleClickIsVisible = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <Header>
        <h1>Dentzusu Shop</h1>
        <DivCarrito>
          <button onClick={handleClickIsVisible}>Ver Carrito</button>
        </DivCarrito>
      </Header>

      <ShoppingCartProvider>
        <ShoppingCart isVisible={isVisible} />

        <DivFilters>
          <DivFiltersContainer>
            <input type="text" placeholder="Buscar producto" />
            <select value={selectValue} onChange={handleChangeSelectFilterPrice}>
              <option value="position">Posición</option>
              <option value="name">Nombre</option>
              <option value="higher">Precio mayor a menor</option>
              <option value="lower">Precio menor a mayor</option>
            </select>
          </DivFiltersContainer>
        </DivFilters>

        <DivProducts>
          <DivSection>
            <Filters />

            <Products products={productsRender} />
          </DivSection>
        </DivProducts>

      </ShoppingCartProvider>
    </>
  )
}

export default App
