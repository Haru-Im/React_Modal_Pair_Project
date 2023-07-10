import React, { useState } from "react";
import { styled } from "styled-components";
import Optionmodal1 from "./option";

function Select() {
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
            <Buttonstyled onClick={() => setopenModal(!openModal)}>
              <div> {selectedText2}</div>
              <div>▼</div>
            </Buttonstyled>
            {openModal && (
              <Optionmodal1
                close={openModal}
                selectList={selectList}
                optionSelect={(item) => {
                  setSelectedText2(item.text);
                  setopenModal(false);
                }}
                selectedText={selectedText}
              ></Optionmodal1>
            )}
          </div>
        </div>
      </SelectContainer>
    </>
  );
}

export default Select;

const SelectContainer = styled.div`
  border: 3px solid black;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
  padding: 12px;
  margin-bottom: 12px;
`;

const Buttonstyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  border: 1px solid black;
  height: 40px;
  width: 300px;
  background-color: white;
  border-radius: 12px;
`;

const OptionBox = styled.div`
  display: flex;
  width: 290px;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 12px;
  margin-top: 12px;
  overflow: hidden;
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
