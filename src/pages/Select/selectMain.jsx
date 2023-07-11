import { useEffect, useRef, useState } from "react";
import { OptionBox, SelectContainer } from "./selectContainer";
import { Buttonstyled } from "./select.Style";
import { OptionSelect } from "./optionStyle";
import Optionmodal from "./optionModal";

function Selectmain() {
    const selectList = [
      { value: "리엑트", text: "리엑트" },
      { value: "자바", text: "자바" },
      { value: "스프링", text: "스크링" },
      { value: "리엑트 네이티브", text: "리엑트 네이티브" },
    ];
    const [selectModal, setSelectModal] = useState(false);
    const [openModal, setopenModal] = useState(false);
    const [selectedText, setSelectedText] = useState("리엑트");
    const [selectedText2, setSelectedText2] = useState("리엑트");
  
    const openBtnRef = useRef(null); 
    const [modalPosition, setModalPosition] = useState({}); 
  
    useEffect(() => {
      const box = openBtnRef.current;
      const rect = box.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom +99,
        left: rect.left + 2, 
      });
    }, [openBtnRef]);
  
  
    return (
      <>
        <SelectContainer>
          <h1> Select</h1>
          <div
            style={{
              display: "flex",
              gap:"12px"
            }}
          >
            <div>
              <Buttonstyled onClick={() => setSelectModal(!selectModal)}>
                <div> {selectedText}</div>
                <div>▼</div>
              </Buttonstyled>
              {selectModal && (
                <OptionBox>
                  {selectList.map((item, idx) => {
                    return (
                      <OptionSelect
                      onClick={() => {
                        setSelectedText(item.text);
                        setSelectModal(false);
                      }}
                      key={idx}
                      value={item.value}
                      >
                        {" "}
                        {item.text}
                      </OptionSelect>
                    );
                  })}
                </OptionBox>
              )}
              </div>
            <div>
              <Buttonstyled  ref={openBtnRef} onClick={() => setopenModal(!openModal)}>
                <div> {selectedText2}</div>
                <div>▼</div>
              </Buttonstyled>
              {openModal && (
                <Optionmodal
                open={openModal}
                selectList={selectList}
                optionSelect={(item) => {
                  setSelectedText2(item.text);
                  setopenModal(false);
                }}
                style={modalPosition}
                ></Optionmodal>
                )}          
            </div>
          </div>
        </SelectContainer>
      </>
    );
  }
  
  export default Selectmain;