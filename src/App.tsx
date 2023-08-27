import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header, DivCarrito, DivProducts, DivSection } from './AppStyle.ts'
import { Products } from './components/Products'
import { ShoppingCart } from './components/ShoppingCart'
import { ShoppingCartProvider } from './context/ShoppingCartProvider.tsx'
import { SelectProducts } from './components/SelectProducts.tsx'
import { ProductsProvider } from './context/ProductsProvider.tsx'
import { OrderProducts } from './components/OrderProducts.tsx'
import { FiltersCategory } from './components/FiltersCategory.tsx'

type PathState = {
  section: string;
  category: string;
  subCategory: string
}

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [showCategoryFilterButton, setShowCategoryFilterButton] = useState(false)
  const [path, setPath] = useState<PathState>({ section: "", category: "", subCategory: "" })

  const handleClickIsVisible = () => {
    setIsVisible(!isVisible)
  }

  const handleMouseEnter = () => {
    setShowCategoryFilterButton(true)
  }

  const handleMouseLeave = () => {
    setShowCategoryFilterButton(false)
  }

  return (
    <>
      <BrowserRouter>
        <Header>
          <h1>Dentzusu Shop</h1>
          <DivCarrito>
            <button onClick={handleClickIsVisible}>Ver Carrito</button>
          </DivCarrito>
        </Header>

        <ShoppingCartProvider>
          <ShoppingCart isVisible={isVisible} />
          <ProductsProvider>
            <OrderProducts onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            {showCategoryFilterButton &&
              <FiltersCategory onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} path={path} />
            }

            <DivProducts>
              <DivSection>

                <SelectProducts />
                <Routes>
                  <Route path='/' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category/:page' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category/:subCategory' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category/:subCategory/:page' element={<Products setPath={setPath} />} />
                  <Route path='/products' element={<Products setPath={setPath} />} />
                </Routes>

              </DivSection>
            </DivProducts>
          </ProductsProvider>

        </ShoppingCartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
