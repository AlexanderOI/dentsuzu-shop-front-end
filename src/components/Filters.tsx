import { SectionFilters } from "../style/FiltersStyle";
import { types, TypesKey } from "../constants/types";
import { sections } from "../constants/section";
import { styled } from "styled-components";
import { useState } from "react";

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

type CategoryType = {
  section: TypesKey;
};

function Types({ section }: CategoryType) {
  const [isVisiblesCategories, setIsVisiblesCategories] = useState(false)
  const sectionTypes = types[section]

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()

  }

  return (
    <UlFilters>
      <h5>{section}</h5>
      {sectionTypes.map((type) => (
        <LiFilters key={type}>
          <A href="" onClick={handleLinkClick}>
            {type}
          </A>
        </LiFilters>
      ))}
    </UlFilters>
  );
}

export function Filters() {

  return (
    <SectionFilters>
      {sections.map((section) => (
        <Types key={section} section={section as TypesKey} />
      ))}
    </SectionFilters>
  );
}
