import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Header, DivCarrito, DivProducts, DivSection, DivHeader } from './AppStyle.ts'
import { Products } from './routes/Products.tsx'
import { ShoppingCart } from './components/products/ShoppingCart'
import { ShoppingCartProvider } from './context/ShoppingCartProvider.tsx'
import { SelectProducts } from './components/products/SelectProducts.tsx'
import { ProductsProvider } from './context/ProductsProvider.tsx'
import { OrderProducts } from './components/products/OrderProducts.tsx'
import { Footer } from './components/Footer.tsx'
import { ShoppingCartIcon } from './assets/icons/IconsApp.tsx'
import { Login } from './routes/Login.tsx'

type PathState = {
  section: string
  category: string
  subCategory: string
}

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPageProducts, setIsPageProducts] = useState(true)

  const [path, setPath] = useState<PathState>({ section: "", category: "", subCategory: "" })

  const handleClickIsVisible = () => {
    setIsVisible(!isVisible)
  }

  const handleClickIsPageProducts = () => {
    setIsPageProducts(!isPageProducts)
  }

  return (
    <>
      <BrowserRouter>
        <Header>
          <DivHeader>
            <h1>Dentzusu Shop</h1>
            {/* <Link to={'/login'} onClick={handleClickIsPageProducts}>Iniciar Seción</Link> */}
            <DivCarrito>
              <button onClick={handleClickIsVisible}><ShoppingCartIcon /></button>
            </DivCarrito>
          </DivHeader>
        </Header>

        <ShoppingCartProvider>
          {isPageProducts && <ShoppingCart isVisible={isVisible} />}
          <ProductsProvider>
            {isPageProducts && <OrderProducts path={path} />}

            <DivProducts>
              <DivSection>

                {isPageProducts && <SelectProducts />}
                <Routes>
                  <Route path='/' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category/:subCategory' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category/page/:page' element={<Products setPath={setPath} />} />
                  <Route path='/products/:section/:category/:subCategory/page/:page' element={<Products setPath={setPath} />} />
                  <Route path='/search/:query' element={<Products setPath={setPath} />} />
                  <Route path='/search/:query/:page' element={<Products setPath={setPath} />} />
                  <Route path='/login' element={<Login />} />
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
