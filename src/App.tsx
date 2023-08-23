import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header, DivCarrito, DivProducts, DivSection } from './AppStyle.ts'
import { Products } from './components/Products'
import { ShoppingCart } from './components/ShoppingCart'
import { ShoppingCartProvider } from './context/ShoppingCartProvider.tsx'
import { SelectProducts } from './components/SelectProducts.tsx'
import { ProductsProvider } from './context/ProductsProvider.tsx'
import { Filters } from './components/Filters.tsx'

function App() {
  const [isVisible, setIsVisible] = useState(false)

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
        <ProductsProvider>

          <Filters />

          <DivProducts>
            <DivSection>
              <BrowserRouter>
                <SelectProducts />
                <Routes>
                  <Route path='/' element={<Products />} />
                  <Route path='/products/:category/:page' element={<Products />} />
                  <Route path='/products/:category' element={<Products />} />
                  <Route path='/products' element={<Products />} />
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
