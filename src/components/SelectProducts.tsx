import { SectionFilters } from "../style/FiltersStyle";
import { types, TypesKey } from "../constants/types";
import { sections } from "../constants/section";
import { styled } from "styled-components";

import { NavLink } from "react-router-dom";

const UlFilters = styled.ul`
padding: 15px 0px 0px 25px;
`
const LiFilters = styled.li`
list-style: none;
`
const NavLinkStyled = styled(NavLink)`
text-decoration: none;
color: #fff;
`

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
