import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

export const SectionFilters = styled.aside`
  top: 150px;
  background-color: #00508b;
  width: 20%;
  height: 100%;
  padding-bottom: 25px;
`

export const UlFilters = styled.ul`
  padding: 15px 0px 0px 25px;
`

export const H5Section = styled.h5`
  width: 90%;
  font-size: 16px;
  border-bottom: 1px solid #000;
  margin-bottom: 5px;
`

export const LiFilters = styled.li`
  list-style: none;
`

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  color: #fff;
`