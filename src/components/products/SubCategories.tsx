import { NavLink } from "react-router-dom"
import { styled } from "styled-components"
import { subCategories, SubCategoriesKey } from "../../constants/subCategories"

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  color: #fff;
`

const UlFilters = styled.ul`
padding: 15px 0px 0px 25px;
position: relative;
font-size: 13px;
right: 0;
`
const LiFilters = styled.li`
list-style: none;
`

type PathState = {
  section: string
  category: string
}

export function SubCategories({ path }: { path: PathState }) {
  const categoryPage = path.category ? path.category : "Aderezos-Condimentos"

  return (
    <UlFilters>
      {subCategories[categoryPage as SubCategoriesKey].map((subCategory) => (
        <LiFilters key={subCategory}>
          <NavLinkStyled to={`products/${path.section}/${path.category}/${subCategory.replace(/[\/\s]/g, '-')}`}>
            {subCategory}
          </NavLinkStyled>
        </LiFilters>
      ))}
    </UlFilters>
  )
}