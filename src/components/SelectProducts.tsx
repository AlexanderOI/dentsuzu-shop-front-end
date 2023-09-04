import { LiFilters, NavLinkStyled, SectionFilters, UlFilters, H5Section } from "../assets/style/SelectProductsStyle"
import { categories, CategoriesKey } from "../constants/categories"
import { sections } from "../constants/section"

function Categories({ section }: { section: CategoriesKey }) {
  const categoriesSection = categories[section]

  return (
    <UlFilters>
      <H5Section>{section}</H5Section>
      {categoriesSection.map((category) => (
        <LiFilters key={category}>
          <NavLinkStyled to={`products/${section.replace(/[\/\s]/g, '-')}/${category.replace(/[\/\s]/g, '-')}`}>
            {category}
          </NavLinkStyled>
        </LiFilters>
      ))}
    </UlFilters>
  )
}

export function SelectProducts() {

  return (
    <SectionFilters>
      {sections.map((section) => (
        <Categories key={section} section={section as CategoriesKey} />
      ))}
    </SectionFilters>
  )
}
