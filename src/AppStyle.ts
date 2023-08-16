import { styled } from 'styled-components'

export const Header = styled.header`
  display: flex;
  position: sticky;
  background-color: #272727;
  color: #fff;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin: 0;
  top: 0;
`

export const DivCarrito = styled.div`
  position: absolute;
  cursor: pointer;
  padding: 20px;
  right: 0;
`

export const DivFilters = styled.div`
  display: flex;
  position: sticky;
  top: 100px;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  background-color: #aaa;
  align-items:center;
  padding-left: 50px;
  padding-right: 50px;
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