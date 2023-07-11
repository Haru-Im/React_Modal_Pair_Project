import { useState } from "react";
import { Modalcontainer } from "./components/containers/modalcontainer";
import Modals from "./components/modals";
import Select from "./components/select";
import Input from "./components/Input"
import { ButtonContainer } from "./pages/button/buttoncontainer";

import Buttons from "./pages/button/buttonmain";
import { LargeButton, SmallButton } from "./pages/button";


function App() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <>
    <Buttons/>
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
      <Select />
    </>
  );
}

export default App;
