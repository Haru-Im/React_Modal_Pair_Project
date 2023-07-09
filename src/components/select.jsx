import React, { useState } from "react";
import { styled } from "styled-components";

function Select() {
  const selectList = ["리엑트", "자바", "스프링", "리엑트네이트"];
  const [select, setSelect] = useState("");

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  return (
    <SelectContainer>
    <h1>Select </h1>
      <div>
          <Selecterbox  onChange={handleSelect} value={select}>
        {selectList.map((item)=>(
            <option value={item} key={item}> 
             {item} 
             </option>
        ))}
        </Selecterbox>
        </div>
    </SelectContainer>
  );
}


export default Select;

const SelectContainer = styled.div`
    border: 3px solid black;
    height: 200px;
    overflow: hidden;
    position: relative;
    margin-top: 50px;
`

const Selecterbox = styled.select`
border: 1px solid black;
height: 40px;
width: 300px;
background-color: white;
border-radius:12px;
`
