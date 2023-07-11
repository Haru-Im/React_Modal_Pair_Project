import { useState } from "react";
import Buttons from "./pages/button/buttonmain";
import { ButtonContainer } from "./pages/button/buttoncontainer";
import { LargeButton, SmallButton } from "./pages/button/buttonssize";

import {Modalcontainer} from './components/containers/modalcontainer'
import Select from './components/select'
import Inputmain from "./pages/input/inputmain";
import OpenModal1 from "./pages/Modal/openModal1";
import OpenModal2 from "./pages/Modal/openModal2";


function App() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <>
    <Buttons/>
      <Inputmain/>

      <h1> Modal</h1>
      <ButtonContainer>
        <SmallButton
          onClick={() => {
            setModal1(true);
          }}
        >
          open modal 1
        </SmallButton>
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
        <div onClick={()=> setModal2(false)}>
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
      <Select />
    </>
  );
}

export default App;
