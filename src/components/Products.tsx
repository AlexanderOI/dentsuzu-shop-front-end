import type { Products, JsonProducts } from '../types.d.ts';
import { useRef, useState } from 'react';
import { Main, ProductsListUl, ProductsListli, Img, ProductTitle, ProductPrice, ConteinerButton, ButtonAmounts, ButtonBuy } from '../style/ProductsStyle.ts';

export function RenderProducts({ sectionProduct }: JsonProducts) {

  const productsList: Products[] = sectionProduct.Almacén['Aderezos/Condimentos'];

  const [amounts, setAmounts] = useState<{ [productId: number]: number }>(
    productsList.reduce((acc, product) => {
      acc[product.productId] = 0
      return acc;
    }, {} as { [productId: number]: number })
  );
  const timerIdRef = useRef<number>(0)

  const handleClickAmount = (productId: number, cant: number, stock: number) => {
    setAmounts((prevAmounts) => {
      if (prevAmounts[productId] === 0 && cant === -1) {
        return prevAmounts
      }
      if (prevAmounts[productId] === stock && cant === 1) {
        return prevAmounts
      }
      return {
        ...prevAmounts,
        [productId]: prevAmounts[productId] + cant
      }

    });
  };

  const handleMouseDownAmount = (productId: number, cant: number, stock: number) => {
    timerIdRef.current = setInterval(() => {
      handleClickAmount(productId, cant, stock)
    }, 100)
  };

  const handleMouseUpAmount = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current)
      timerIdRef.current = 0
    }
  }

  const handleClickBuy = (productId: number) => {
    setAmounts((prevAmounts) => {
      return {
        ...prevAmounts,
        [productId]: 0
      }
    })
  }

  return (
    <Main>
      <ProductsListUl>
        {productsList.slice(0, 25).map((product) => (
          <ProductsListli key={product.productId}>
            <Img src={product.img} alt={product.alt} />
            <ProductTitle>{product.product}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            <span>{product.productId}</span>
            <ConteinerButton>
              <ButtonAmounts
                onClick={() => handleClickAmount(product.productId, -1, product.stock)}
                onMouseDown={() => handleMouseDownAmount(product.productId, -1, product.stock)}
                onMouseUp={handleMouseUpAmount}
              >
                {'<'}
              </ButtonAmounts>
              <span>{amounts[product.productId]}</span>
              <ButtonAmounts
                onClick={() => handleClickAmount(product.productId, 1, product.stock)}
                onMouseDown={() => handleMouseDownAmount(product.productId, 1, product.stock)}
                onMouseUp={handleMouseUpAmount}
              >
                {'>'}
              </ButtonAmounts>
              <ButtonBuy onClick={() => handleClickBuy(product.productId)}>Al carro</ButtonBuy>

            </ConteinerButton>
          </ProductsListli>
        ))}
      </ProductsListUl>
    </Main>
  );
}
