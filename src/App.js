import { useState } from "react";
import Input from "./components/Input";
import { LargeButton, MediumButton, SmallButton } from "./components/buttons";
import { Modalcontainer } from "./components/containers/modalcontainer";
import { ButtonContainer } from "./components/containers/buttoncotainer";
import Modals from "./components/modals";

function App() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

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
        <SmallButton>Small </SmallButton>
      </ButtonContainer>
      <ButtonContainer>
        <LargeButton
          textcolor="rgb(214, 48, 49)"
          backgroundcolor="rgb(255, 255, 255)"
          border="3px solid rgb(250, 177, 160)"
          onClick={() => {
            const inputValue = prompt("어렵나요?");
            if (inputValue !== null) {
              console.log(inputValue);
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
      <h1>Input</h1>
      <Input />
      <h1> Modal</h1>
      <ButtonContainer>
        <SmallButton
          onClick={() => {
            setModal1(true);
          }}
        >
          open modal 1
        </SmallButton>
        <Modals modal1={modal1}>
          test modal
          <Modalcontainer>
            <SmallButton
              onClick={() => {
                setModal1(false);
              }}
            >
              닫기
            </SmallButton>
            <SmallButton
              onClick={() => {
                console.log("on!");
              }}
              textcolor="rgb(214, 48, 49)"
              backgroundcolor="rgb(250, 177, 160)"
            >
              확인
            </SmallButton>
          </Modalcontainer>
        </Modals>
        <LargeButton
          onClick={() => setModal2(true)}
          textcolor="red"
          border="3px solid rgb(250, 177, 160)"
        >
          <p>open modal2</p>
        </LargeButton>
        <div onClick={()=> setModal2(false)}>
          <Modals modal2={modal2}>
            test 2
            <div>
              <button
                onClick={() => setModal2(false)}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                x
              </button>
            </div>
          </Modals>
        </div>
      </ButtonContainer>
    </>
  );
}

export default App;
