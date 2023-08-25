import { subCategories, SubCategoriesKey } from "../constants/subCategories";
import { styled } from "styled-components";

type TypesProps = {
  category: SubCategoriesKey
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

export function SubCategories({ category }: TypesProps) {
  return (
    <UlFilters>
      <h4>{category}</h4>
      {subCategories[category].map((subCategory) => (
        <LiFilters key={subCategory}>
          <A href="">
            {subCategory}
          </A>
        </LiFilters>
      ))}
    </UlFilters>
  )
}