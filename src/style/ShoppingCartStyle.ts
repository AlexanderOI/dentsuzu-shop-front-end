import { styled } from 'styled-components';

export const ViewCart = styled.div`
  position: fixed;
  top: 150px;
  right: 0;
  background-color: #fff;
  width: 370px;
  height: 500px;
  border: 2px solid #233;
`

export const H3 = styled.h3`
  display: flex;
  justify-content: center;
  padding: 5px;
`

export const Li = styled.li`
display: flex;
padding: 5px;
`

export const Img = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 5px;
  border: 1px solid #333;
`

export const DivInfo = styled.div`
  position: relative;
  width: 200px;
`
export const SpanName = styled.span`
  font-size: 12px;
`
export const SpanPrice = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  font-size: 16px;
`
export const DivButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`
export const Button = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
`