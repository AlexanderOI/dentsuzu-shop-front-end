import { DivFilters, DivFiltersContainer } from "../AppStyle";
import { useProductsFilters } from "../hooks/useProductsFilters";
import { ORDER_OPTIONS } from "../constants/order";

export function Filters() {
  const { selectValue, handleChangeSelectFilterPrice } = useProductsFilters('position')

  return (
    <DivFilters>
      <DivFiltersContainer>
        <input type="text" placeholder="Buscar producto" />

        <select value={selectValue} onChange={handleChangeSelectFilterPrice}>
          {ORDER_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))

          }
        </select>
      </DivFiltersContainer>
    </DivFilters>
  )
}