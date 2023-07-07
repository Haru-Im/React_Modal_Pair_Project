import { ATTRIBUTE_NEGATIVE, ATTRIBUTE_PRIMARY } from "../button-utils";

export const handleButtonClick = (attribute) => {
  if (attribute === ATTRIBUTE_PRIMARY) {
    alert("버튼을 만들어보세요");
  } else if (attribute === ATTRIBUTE_NEGATIVE) {
    let userResponse = window.prompt("어렵나요?");
  }
};
