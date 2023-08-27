import { useProductsFilters } from "../hooks/useProductsFilters";
import { ORDER_OPTIONS } from "../constants/order";
import { DivFilters, DivFiltersContainer, DivFilterSelect, DivShowCategoryFilter } from "../style/OrderStyled";

type OrderProductsProps = {
  onMouseEnter: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>
}

export function OrderProducts({ onMouseEnter, onMouseLeave }: OrderProductsProps) {
  const { selectValue, handleChangeSelectFilterPrice } = useProductsFilters('position')

  return (
    <DivFilters>
      <DivFiltersContainer>
        <input type="text" placeholder="Buscar producto" />
        <DivFilterSelect>
          <select value={selectValue} onChange={handleChangeSelectFilterPrice}>
            {ORDER_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))

            }
          </select>

          <DivShowCategoryFilter onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <span>Filtrar por Categorias</span>
          </DivShowCategoryFilter>
        </DivFilterSelect>
      </DivFiltersContainer>
    </DivFilters>
  )
}