import React from "react";
import { ButtonContainer } from "./buttoncontainer";
import { LargeButton, MediumButton, SmallButton } from "./buttonssize";





function Buttons() {
  return (
    <>
      <h1> Button</h1>
      <ButtonContainer>
        <LargeButton
          onClick={() => {
            alert("버튼을 만들어보세요");
          }}
        >
          <p> Large Primary Button </p>
          <p>{">"} </p>
        </LargeButton>
        <MediumButton>Medium</MediumButton>
        <SmallButton> Small </SmallButton>
      </ButtonContainer>
      <ButtonContainer>
        <LargeButton
          textcolor="rgb(214, 48, 49)"
          backgroundcolor="rgb(255, 255, 255)"
          border="3px solid rgb(250, 177, 160)"
          onClick={() => {
            const inputValue = prompt("어렵나요?");
            if (inputValue !== null) {
            }
          }}
        >
          <p>Large Negative Button</p>
        </LargeButton>

        <MediumButton
          textcolor="rgb(214, 48, 49)"
          backgroundcolor="rgb(250, 177, 160)"
        >
          Medium
        </MediumButton>
        <SmallButton
          textcolor="rgb(214, 48, 49)"
          backgroundcolor="rgb(250, 177, 160)"
        >
          Small
        </SmallButton>
      </ButtonContainer>
    </>
  );
}

export default Buttons;
