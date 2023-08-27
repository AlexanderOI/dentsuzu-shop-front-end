import { styled } from "styled-components";
export const DivFilters = styled.div`
  display: flex;
  position: sticky;
  top: 100px;
  width: 100%;
  height: 50px;
  background-color: #aaa;
  align-items: center;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
`

export const DivFiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1200px;

  input {
    width: 170px;
    height: 30px;
  }
`

export const DivFilterSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 350px;
  height: 100%;

  select {
    width: 150px;
    height: 30px;
  }
`

export const DivShowCategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 100%;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  cursor: pointer;

  span {
    font-size: 15px;
  }
`