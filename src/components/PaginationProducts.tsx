import { NavLinkStyled } from "../style/ProductsStyle"

type PaginationProductsProps = {
  totalPages: number
  generateUrl: (pageNumber: number) => string
}

export function PaginationProducts({ totalPages, generateUrl }: PaginationProductsProps) {
  return (
    <>
      {Array.from(
        { length: totalPages },
        (_, index) => {
          const url = generateUrl(index + 1)
          return (
            <NavLinkStyled key={index + 1} to={url}>
              {index + 1}
            </NavLinkStyled>
          )
        }
      )}
    </>

  )
}