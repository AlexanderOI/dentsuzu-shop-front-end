import { styled } from "styled-components"
import { SubCategories } from "./SubCategories"

const DivCategory = styled.div`
  display: flex;
  position: fixed;
  background-color: #2093ff;
  right: 50px;
  width: 170px;
  height: 400px;
  border: 1px solid #000;
  border-top: none;
`

type PathState = {
  section: string;
  category: string;
}

type OrderProductsProps = {
  onMouseEnter: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>
  path: PathState
}

export function FiltersCategory({ onMouseEnter, onMouseLeave, path }: OrderProductsProps) {

  return (
    <DivCategory onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <SubCategories path={path} />
    </DivCategory>
  )
}