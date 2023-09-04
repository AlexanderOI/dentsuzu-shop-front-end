import { styled } from 'styled-components'

// .color1 {color: #00508b;}
// .color2 {color: #006599;}
// .color3 {color: #0088ae;}
// .color4 {color: #00bcc3;}
// .color5 {color: #00ffcd;}

export const Header = styled.header`
  display: flex;
  position: sticky;
  background-color: #00508b;
  color: #fff;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin: 0;
  top: 0;
`

export const DivHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 1280px;
`

export const DivCarrito = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100px;
  right: 0;
  padding: 20px;

  button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    padding: 8px;
    border: none;
    border-radius: 50px;
  }

`

export const DivProducts = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`

export const DivSection = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  justify-content: center;
`
