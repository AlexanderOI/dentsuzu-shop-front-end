import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Products } from './routes/Products.tsx'
import { ShoppingCart } from './components/products/ShoppingCart'
import { ShoppingCartProvider } from './context/ShoppingCartProvider.tsx'
import { SelectProducts } from './components/products/SelectProducts.tsx'
import { ProductsProvider } from './context/ProductsProvider.tsx'
import { OrderProducts } from './components/products/OrderProducts.tsx'
import { Footer } from './components/Footer.tsx'
import { ShoppingCartIcon } from './assets/icons/Icons.tsx'

import { styled } from 'styled-components'

export const Header = styled.header`
  display: flex;
  position: sticky;
  background-color: #00508b;
  color: #fff;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin: 0;
  top: 0;
`

export const DivHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 1280px;
`

export const DivCarrito = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100px;
  right: 0;
  padding: 20px;

  button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    padding: 8px;
    border: none;
    border-radius: 50px;
  }
`

export const DivProducts = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`

export const DivSection = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  justify-content: center;
`

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
            {/* <Link to={'/login'} onClick={handleClickIsPageProducts}>Iniciar Seción</Link> */}
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
