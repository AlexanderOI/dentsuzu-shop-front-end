import { useState, useEffect, ChangeEvent } from "react"

export function useProductsFilters(initialOrder: string) {
  const [filters, setFilters] = useState({
    category: 'all',
    order: initialOrder,
  })

  const [selectValue, setSelectValue] = useState<string>('position')

  useEffect(() => {
    setFilters({ category: 'all', order: `${selectValue}` })

  }, [selectValue])

  const handleChangeSelectFilterPrice = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value)
  }

  return {
    filters,
    selectValue,
    handleChangeSelectFilterPrice
  }
}