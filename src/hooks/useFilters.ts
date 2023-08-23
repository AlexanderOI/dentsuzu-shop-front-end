import { useParams } from "react-router-dom";


export const useFilters = () => {
  const { category, page } = useParams()

  const productsPerPage = 28;
  const intPage = page ? parseInt(page) : 1
  const startIndex = (intPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage

  return { category, page, startIndex, endIndex }
}
