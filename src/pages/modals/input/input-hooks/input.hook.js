import { useState } from "react";
import { INPUT_NAME, INPUT_PRICE } from "../input-utils";

export const useInput = () => {
  const [inputValues, setInputValues] = useState({
    [INPUT_NAME]: "",
    [INPUT_PRICE]: 0,
  });

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (inputValues[INPUT_NAME].trim().length === 0) {
      alert("이름과 가격을 모두 입력해 주세요");
      return;
    }

    alert(
      `이름: ${inputValues[INPUT_NAME]}, 가격: ${inputValues[INPUT_PRICE]}`
    );

    setInputValues({
      [INPUT_NAME]: "",
      [INPUT_PRICE]: 0,
    });
  };

  const handleInputChange = (e, attribute) => {
    let value = e.target.value;

    if (attribute === INPUT_PRICE) {
      value = value.replace(/[^0-9]/g, ""); // 숫자만 입력되게 하는 코드
      value = value ? parseInt(value).toLocaleString() : ""; // 3자리마다 콤마가 찍히도록
    }

    setInputValues({
      ...inputValues,
      [attribute]: value,
    });
  };

  return {
    inputValues,
    handleInputChange,
    handleSaveClick,
  };
};
