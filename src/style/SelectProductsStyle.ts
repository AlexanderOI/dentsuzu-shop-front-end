import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

export const SectionFilters = styled.aside`
  top: 150px;
  background-color: #707bd6;
  width: 20%;
  height: 100%;
`

export const UlFilters = styled.ul`
  padding: 15px 0px 0px 25px;
`

export const LiFilters = styled.li`
  list-style: none;
`

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`