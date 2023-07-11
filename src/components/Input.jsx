import React, { useState } from "react";

import styled from "styled-components";
import { SmallButton } from "../pages/button/buttonssize";

function Input() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("0");

  const NameHandler = (e) => {
    setName(e.target.value);
  };

  const NumberHandler = (e) => {
    const inputValue = e.target.value;
    let numericValue = inputValue.replace(/\D/g, '');
  
    if (numericValue === '') {
      numericValue = 0;
    }
  
    const formattedValue = parseInt(numericValue, 10).toLocaleString();
  
    setNumber(formattedValue);
  };
  
  
  

  const ButtonHandler = () => {
    if (name === "" && number === '0'){
        alert('이름과 가격 모두 입력해주세요.')
    }else{
     alert(`name: ${name}, price: ${number}`);
    }

    setName('')
    setNumber(0)
  };

  return (
    <>
      <Inputcontainer>
        <div>
        이름 <Inputbox type="text" value={name} onChange={NameHandler} />
        </div>
        <div>
        가격 <Inputbox type="text" value={number} onChange={NumberHandler}  />
        </div>
        <SmallButton onClick={ButtonHandler}>저장</SmallButton>
      </Inputcontainer>
    </>
  );
}

const Inputbox = styled.input`
    border: 1px solid black;
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;

    &:focus{
        border:2px solid black;
    }
  `;

const Inputcontainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  
  
`;

export default Input;
