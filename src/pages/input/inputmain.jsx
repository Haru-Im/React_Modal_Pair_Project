import { useState } from "react";
import { Inputbox, Inputcontainer } from "./InputContainer";
import { ButtonHandler, NameHandler, NumberHandler } from "./InputHandalers";
import { SmallButton } from "../button/buttonssize";

function Inputmain() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("0");
  
    return (
      <>
      <h1> Input</h1>
        <Inputcontainer>
          <div>
            이름 <Inputbox type="text" value={name} onChange={(e) => NameHandler(e, setName)} />
          </div>
          <div>
            가격 <Inputbox type="text" value={number} onChange={(e) => NumberHandler(e, setNumber)} />
          </div>
          <SmallButton onClick={() => ButtonHandler(name, number, setName, setNumber)}>저장</SmallButton>
        </Inputcontainer>
      </>
    );
  }
  
  export default Inputmain;
  