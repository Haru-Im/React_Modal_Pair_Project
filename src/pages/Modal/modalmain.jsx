import React, { useState } from "react";
import { ButtonContainer } from "../button/buttoncontainer";
import { LargeButton, SmallButton } from "../button/buttonssize";
import OpenModal1 from "./openModal1";
import { Modalcontainer } from "./modalContainer";
import OpenModal2 from "./openModal2";

function Modalmain() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  return (
    <>
      <h1> Modal</h1>
      <ButtonContainer>
        <SmallButton onClick={() => setModal1(true)}> open modal 1</SmallButton>
        <OpenModal1 modal1={modal1}>
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
        </OpenModal1>
        <LargeButton
          onClick={() => setModal2(true)}
          textcolor="red"
          border="3px solid rgb(250, 177, 160)"
        >
          <p>open modal2</p>
        </LargeButton>
        <div onClick={() => setModal2(false)}>
          <OpenModal2 modal2={modal2}>
            test2
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
          </OpenModal2>
        </div>
      </ButtonContainer>
    </>
  );
}

export default Modalmain;
