import { styled } from 'styled-components';
import type { Products, JsonProducts } from '../types.d.ts';
import { useState } from 'react';

export function RenderProducts({ sectionProduct }: JsonProducts) {
  const Main = styled.main`
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px;
  `;
  const ProductsListUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  `;
  const ProductsListli = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #cfcecf;
    padding: 20px;
  `;
  const Img = styled.img`
    background-color: #3d3d3d;
    width: 150px;
    height: 150px;
  `;
  const ProductTitle = styled.strong`
    margin-top: 10px;
  `;
  const ProductPrice = styled.span`
    margin-top: 5px;
    font-weight: bold;
  `;

  const productsList: Products[] = sectionProduct.Almacén['Aderezos/Condimentos'];

  const [amounts, setAmounts] = useState<{ [productId: number]: number }>(
    productsList.reduce((acc, product) => {
      acc[product.productId] = 0;
      return acc;
    }, {})
  );

  const handleClickBuy = (productId: number) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [productId]: prevAmounts[productId] + 1,
    }));
  };

  return (
    <Main>
      <ProductsListUl>
        {productsList.map((product) => (
          <ProductsListli key={product.productId}>
            <Img src={product.img} alt={product.alt} />
            <ProductTitle>{product.product}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            <div>
              <button onClick={() => handleClickBuy(product.productId)}>comprar</button>
              <span>{amounts[product.productId]}</span>
            </div>
          </ProductsListli>
        ))}
      </ProductsListUl>
    </Main>
  );
}
