import React from "react";
import { styled } from "styled-components";
import ReactDOM from "react-dom";

const Optionmodal1 = ({ selectList, optionSelect, open, style }) => {

  if (open) {
    return ReactDOM.createPortal(
      <OptionBox1 top={style.top} left= {style.left}>
        {selectList.map((item, idx) => (
          <OptionSelect
            onClick={() => optionSelect(item)}
            key={idx}
            value={item.value}
          >
            {item.text}
          </OptionSelect>
        ))}
      </OptionBox1>,
      document.getElementById("portal")
    );
  }
  return null;
};

export default Optionmodal1;

const OptionBox1 = styled.div`
  background-color: white;
  display: flex;
  width: 290px;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 12px;
  margin-top: 12px;
  position: absolute;
  overflow: hidden;

  top: ${props => props.top}px;
  left: ${props => props.left}px
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
