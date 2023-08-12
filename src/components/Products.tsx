import type { Products } from '../types.d.ts';
import { useRef, useState } from 'react';
import { Main, ProductsListUl, ProductsListli, Img, ProductTitle, ProductPrice, ContainerInfo, ContainerButton, ButtonAmounts, ButtonBuy } from '../style/ProductsStyle.ts';

export function RenderProducts({ products }: Products) {


  const [amounts, setAmounts] = useState<{ [productId: number]: number }>(
    products.reduce((acc, product) => {
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
        {products.slice(0, 25).map((product) => (
          <ProductsListli key={product.productId}>
            <ContainerInfo>
              <Img src={product.img} alt={product.alt} />
              <ProductPrice>Gs. {product.price}</ProductPrice>
              <ProductTitle>{product.product}</ProductTitle>
            </ContainerInfo>
            <ContainerButton>
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

            </ContainerButton>
          </ProductsListli>
        ))}
      </ProductsListUl>
    </Main>
  );
}
