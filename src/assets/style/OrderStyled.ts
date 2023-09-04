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
`

export const DivFiltersContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1280px;

  form {
    width: 20%;
  }

  input {
    max-width: 300px;
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
  }

  input {
    max-width: 300px;
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
  }

  input:focus {
    outline-color: #00508b;
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
    border: none;
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