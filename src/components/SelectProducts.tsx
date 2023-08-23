import { LiFilters, NavLinkStyled, SectionFilters, UlFilters } from "../style/SelectProductsStyle";
import { types, TypesKey } from "../constants/types";
import { sections } from "../constants/section";


function Types({ section }: { section: TypesKey }) {
  const sectionTypes = types[section]

  return (
    <UlFilters>
      <h5>{section}</h5>
      {sectionTypes.map((type) => (
        <LiFilters key={type}>
          <NavLinkStyled to={`products/${type.replace(/[\/\s]/g, '-')}`}>
            {type}
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
        <Types key={section} section={section as TypesKey} />
      ))}
    </SectionFilters>
  );
}
