import { LiFilters, NavLinkStyled, SectionFilters, UlFilters } from "../style/SelectProductsStyle";
import { categories, CategoriesKey } from "../constants/categories";
import { sections } from "../constants/section";


function Categories({ section }: { section: CategoriesKey }) {
  const sectionTypes = categories[section]

  return (
    <UlFilters>
      <h5>{section}</h5>
      {sectionTypes.map((categories) => (
        <LiFilters key={categories}>
          <NavLinkStyled to={`products/${categories.replace(/[\/\s]/g, '-')}`}>
            {categories}
          </NavLinkStyled>
        </LiFilters>
      ))}
    </UlFilters>
  );
}

export function SelectProducts() {

  return (
    <SectionFilters>
      {sections.map((section) => (
        <Categories key={section} section={section as CategoriesKey} />
      ))}
    </SectionFilters>
  );
}
