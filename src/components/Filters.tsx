import { ChangeEvent } from "react";
import { DivFilters, DivFiltersContainer } from "../AppStyle";

type onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => void;

type FiltersProps = {
  selectValue: string;
  onChangeSelect: onChangeSelect
}

export function Filters({ selectValue, onChangeSelect }: FiltersProps) {
  return (
    <DivFilters>
      <DivFiltersContainer>
        <input type="text" placeholder="Buscar producto" />
        <select value={selectValue} onChange={onChangeSelect}>
          <option value="position">Posición</option>
          <option value="name">Nombre</option>
          <option value="higher">Precio mayor a menor</option>
          <option value="lower">Precio menor a mayor</option>
        </select>
      </DivFiltersContainer>
    </DivFilters>
  )
}