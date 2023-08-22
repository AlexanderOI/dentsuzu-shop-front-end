import { categories, CategoriesKey } from "../constants/categories";
import { styled } from "styled-components";

type TypesProps = {
  types: CategoriesKey
}

const UlFilters = styled.ul`
padding: 15px 0px 0px 25px;
`
const LiFilters = styled.li`
list-style: none;
`
const A = styled.a`
text-decoration: none;
color: #fff;
`

export function Categories({ types }: TypesProps) {
  return (
    <UlFilters>
      <h4>{types}</h4>
      {categories[types].map((category) => (
        <LiFilters key={category}>
          <A href="">
            {category}
          </A>
        </LiFilters>
      ))}
    </UlFilters>
  )
}