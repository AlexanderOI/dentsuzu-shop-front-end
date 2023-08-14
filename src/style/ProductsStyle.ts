import { styled } from 'styled-components'

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
`;

export const ProductsListli = styled.li`
display: flex;
flex-direction: column;
align-items: center;
background-color: #cfcecf;
padding: 20px;
font-weight: 300;
`;

export const ContainerInfo = styled.div`
display: inline-block;
height: 90%;
`

export const Img = styled.img`
background-color: #3d3d3d;
width: 100%;
height: 150px;
`;

export const ProductTitle = styled.strong`
display: block;
font-size: 13px;
width: 100%;
margin-top: 10px;
margin-bottom: 10px;
`;

export const ProductPrice = styled.span`
margin-top: 5px;
font-weight: bold;
`;

export const ContainerButton = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const ButtonAmounts = styled.button`
cursor: pointer;
width: 25px;
height: 35px;
`
export const ButtonBuy = styled.button`
cursor: pointer;
width: 60px;
height: 35px;
`