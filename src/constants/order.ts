export const ORDER_BY = {
  POSITION: "position",
  NAME: "name",
  HIGHER_PRICE: "higher",
  LOWER_PRICE: "lower",
}

export const ORDER_OPTIONS = [
  { value: ORDER_BY.POSITION, label: "Posición" },
  { value: ORDER_BY.NAME, label: "Nombre" },
  { value: ORDER_BY.HIGHER_PRICE, label: "Precio mayor a menor" },
  { value: ORDER_BY.LOWER_PRICE, label: "Precio menor a mayor" },
]
