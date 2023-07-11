import { useInput } from "../input-hooks";
import { InputComponent } from "../input-component";
import { ExtendedContainer, FormContainer } from "../input-style";
import { INPUT_NAME, INPUT_PRICE } from "../input-utils";
import { ATTRIBUTE_PRIMARY, ButtonComponent, SIZE_SMALL } from "../../button";

export const InputContainer = () => {
  const { inputValues, handleInputChange, handleSaveClick } = useInput();

  return (
    <FormContainer>
      <ExtendedContainer>
        <InputComponent
          attribute={INPUT_NAME}
          value={inputValues[INPUT_NAME]}
          onChange={(event) => handleInputChange(event, INPUT_NAME)}
        />
        <InputComponent
          attribute={INPUT_PRICE}
          value={inputValues[INPUT_PRICE]}
          onChange={(event) => handleInputChange(event, INPUT_PRICE)}
        />
        <ButtonComponent
          attribute={ATTRIBUTE_PRIMARY}
          size={SIZE_SMALL}
          onClick={handleSaveClick}
        >저장</ButtonComponent>
      </ExtendedContainer>
    </FormContainer>
  );
};
