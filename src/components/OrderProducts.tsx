import { useProductsFilters } from "../hooks/useProductsFilters"
import { ORDER_OPTIONS } from "../constants/order"
import { DivFilters, DivFiltersContainer, DivFilterSelect, DivShowCategoryFilter } from "../assets/style/OrderStyled"
import { useState } from "react"
import { useProductContext } from "../context/ProductsProvider"
import { sectionProducts } from "../json/products"
import { ProductsList } from "../types"
import { useNavigate } from "react-router-dom"
import { FiltersCategory } from "./FiltersCategory"

type OrderProductsProps = {
  path: PathState
}

type PathState = {
  section: string
  category: string
  subCategory: string
}

export function OrderProducts({ path }: OrderProductsProps) {
  const { setProducts } = useProductContext()
  const { selectValue, handleChangeSelectFilterPrice } = useProductsFilters('position')
  const [searchValue, setSearchValue] = useState<string>("")
  const history = useNavigate()

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let newProductSearch: ProductsList[] = []
    for (const section in sectionProducts) {
      const sectionData = sectionProducts[section]

      for (const category in sectionData) {
        const CategoryData = sectionData[category]

        const categoryResults = CategoryData.filter((product) => {
          return product.product.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        })

        newProductSearch = newProductSearch.concat(categoryResults)
      }
    }

    setProducts(newProductSearch)
    history(`/search/${searchValue.replace(/[\/\s]/g, '-')}`)
  }

  const [showCategoryFilterButton, setShowCategoryFilterButton] = useState(false)
  const handleMouseEnter = () => {
    setShowCategoryFilterButton(true)
  }

  const handleMouseLeave = () => {
    setShowCategoryFilterButton(false)
  }

  return (
    <DivFilters>

      <DivFiltersContainer>
        <form onSubmit={handleSubmitSearch}>
          <input
            type="text"
            placeholder="Buscar producto"
            value={searchValue}
            onChange={handleChangeSearch}
          />
        </form>

        <DivFilterSelect>
          <select value={selectValue} onChange={handleChangeSelectFilterPrice}>
            {ORDER_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))

            }
          </select>

          <DivShowCategoryFilter onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span>Filtrar por Categorias</span>
          </DivShowCategoryFilter>
        </DivFilterSelect>
        {showCategoryFilterButton &&
          <FiltersCategory onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} path={path} />
        }
      </DivFiltersContainer>
    </DivFilters>
  )
}