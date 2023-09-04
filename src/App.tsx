import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header, DivCarrito, DivProducts, DivSection, DivHeader } from './AppStyle.ts'
import { Products } from './routes/Products.tsx'
import { ShoppingCart } from './components/ShoppingCart'
import { ShoppingCartProvider } from './context/ShoppingCartProvider.tsx'
import { SelectProducts } from './components/SelectProducts.tsx'
import { ProductsProvider } from './context/ProductsProvider.tsx'
import { OrderProducts } from './components/OrderProducts.tsx'
import { Footer } from './components/Footer.tsx'
import { ShoppingCartIcon } from './assets/icons/IconsApp.tsx'

type PathState = {
  section: string
  category: string
  subCategory: string
}

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const [path, setPath] = useState<PathState>({ section: "", category: "", subCategory: "" })

  const handleClickIsVisible = () => {
    setIsVisible(!isVisible)
  }


  return (
    <>
      <BrowserRouter>
        <Header>
          <DivHeader>
            <h1>Dentzusu Shop</h1>
            <DivCarrito>
              <button onClick={handleClickIsVisible}><ShoppingCartIcon /></button>
            </DivCarrito>
          </DivHeader>
        </Header>

        <ShoppingCartProvider>
          <ShoppingCart isVisible={isVisible} />
          <ProductsProvider>
            <OrderProducts path={path} />

            <DivProducts>
              <DivSection>

                <SelectProducts />
                <Routes>
                  <Route path='/' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category/:subCategory' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category/page/:page' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category/:subCategory/page/:page' element={<Products setPath={setPath} />} />
                  <Route path='/search/:query' element={<Products setPath={setPath} />} />
                  <Route path='/search/:query/:page' element={<Products setPath={setPath} />} />
                </Routes>

              </DivSection>
            </DivProducts>
          </ProductsProvider>
        </ShoppingCartProvider>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
