import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components'

export const Main = styled.main`
  display: inline-block;
  width: 80%;
  height: 100%;
  padding: 10px;
`

export const Nav = styled.nav`
  display: inline-block;
  width: 100%;
`

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  background: #707bd6;
  text-decoration: none;
  text-align: center;
  width: 25px;
  height: 25px;
  color: #fff;
  margin: 0px 6px 10px 0px;
  padding-top: 4px;
  border-radius: 5px;
`

export const ProductsListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  list-style: none;
`

export const ProductsListli = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cfcecf;
  padding: 20px;
  font-weight: 300;
`

export const ContainerInfo = styled.div`
  display: inline-block;
  height: 90%;
`
export const DivConteinerImg = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding-bottom: 5px;
`

export const SpanStock = styled.span`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  color: #ff0000;
  padding:5px 45px 5px 45px;
`

export const Img = styled.img`
  background-color: #fff;
  width: 100%;
  height: 150px;
`

export const ProductTitle = styled.strong`
  display: block;
  font-size: 13px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ProductPrice = styled.span`
  margin-top: 5px;
  font-weight: bold;
`

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const ButtonQuantity = styled.button`
  cursor: pointer;
  width: 25px;
  height: 35px;
`
export const ButtonBuy = styled.button`
  cursor: pointer;
  width: 60px;
  height: 35px;
`