import styled from 'styled-components'
import { sectionProducts } from './json/products.ts'
import { RenderProducts } from './components/Products'

function App() {

  const H1 = styled.h1`
  display: flex;
  background-color: #272727;
  justify-content: center;
  padding: 20px;
  margin: 0;
  color: #fff
  `

  return (
    <>
      <H1>Dentzusu Shop</H1>
      <RenderProducts sectionProduct={sectionProducts} />
    </>
  )
}

export default App
