import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header, DivCarrito, DivProducts, DivSection } from './AppStyle.ts'
import { sectionProducts } from './json/products.ts'
import { Products } from './components/Products'
import { ProductsList } from './types'
import { useProductsFilters } from './hooks/useProductsFilters.ts'
import { ShoppingCart } from './components/ShoppingCart'
import { ShoppingCartProvider } from './context/ShoppingCartProvider.tsx'
import { SelectProducts } from './components/SelectProducts.tsx'
import { ProductsProvider } from './context/ProductsProvider.tsx'
import { Filters } from './components/Filters.tsx'

function App() {

  const { filters, selectValue, handleChangeSelectFilterPrice } = useProductsFilters('Position')
  const [isVisible, setIsVisible] = useState(false)

  const handleClickIsVisible = () => {
    setIsVisible(!isVisible)
  }

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
        <ProductsProvider>

          <Filters selectValue={selectValue} onChangeSelect={handleChangeSelectFilterPrice} />

          <DivProducts>
            <DivSection>
              <BrowserRouter>
                <SelectProducts />
                <Routes>
                  <Route path='/' element={<Products products={productsRender} />} />
                  <Route path='/products/:category/:page' element={<Products products={productsRender} />} />
                  <Route path='/products/:category' element={<Products products={productsRender} />} />
                  <Route path='/products' element={<Products products={productsRender} />} />
                </Routes>

              </BrowserRouter>
            </DivSection>
          </DivProducts>
        </ProductsProvider>

      </ShoppingCartProvider>
    </>
  )
}

export default App
