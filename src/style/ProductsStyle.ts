import { styled } from 'styled-components';

export const Main = styled.main`
display: block;
width: 100%;
height: 100%;
padding: 10px;
`;

export const ProductsListUl = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 20px;
list-style: none;
padding: 0;
margin: 0;
`;

export const ProductsListli = styled.li`
display: flex;
flex-direction: column;
align-items: center;
background-color: #cfcecf;
padding: 20px;
`;

export const Img = styled.img`
background-color: #3d3d3d;
width: 150px;
height: 150px;
`;

export const ProductTitle = styled.strong`
margin-top: 10px;
`;

export const ProductPrice = styled.span`
margin-top: 5px;
font-weight: bold;
`;

export const ConteinerButton = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const ButtonAmounts = styled.button`
width: 25px;
height: 35px;
`
export const ButtonBuy = styled.button`
width: 60px;
height: 35px;
`