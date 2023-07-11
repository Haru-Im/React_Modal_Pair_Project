import { styled } from "styled-components";

const SelectContainer = styled.div`
  border: 3px solid black;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
  padding: 12px;
  margin-bottom: 12px;
`;

const OptionBox = styled.div`
  display: flex;
  width: 290px;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 12px;
  margin-top: 12px;
  overflow: hidden;
`;

const OptionSelect = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  display: flex; 
  align-items: center;
  cursor: pointer;
  padding: 2px;
  margin: 0;

  &:hover {
    background-color: lightgrey;
  }
`;

export {SelectContainer,OptionBox,OptionSelect}