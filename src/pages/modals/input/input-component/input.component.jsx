import { Input } from "../input-style/input.style";
import { INPUT_NAME, INPUT_PRICE } from "../input-utils";

export const InputComponent = ({ attribute, value, onChange }) => {
  let labelText = "";
  switch (attribute) {
    case INPUT_NAME:
      labelText = "이름";
      break;
    case INPUT_PRICE:
      labelText = "가격";
      break;
    default:
      break;
  }

  return (
    <div>
      <label>{labelText}</label>
      <Input value={value} onChange={onChange} />
    </div>
  );
};
