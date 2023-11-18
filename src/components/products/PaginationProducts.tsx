import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

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

type PaginationProductsProps = {
  totalPages: number
  generateUrl: (pageNumber: number) => string
}

export function PaginationProducts({ totalPages, generateUrl }: PaginationProductsProps) {
  return (
    <Nav>
      {Array.from(
        { length: totalPages },
        (_, index) => {
          const url = generateUrl(index + 1)
          return (
            <NavLinkStyled key={index + 1} to={url}>
              {index + 1}
            </NavLinkStyled>
          )
        }
      )}
    </Nav>

  )
}