import { ButtonComponent, InputComponent } from "../input-component";
import { useInput } from "../input-hooks";
import { ExtendedContainer, FormContainer } from "../input-style/input.style";
import { INPUT_NAME, INPUT_PRICE } from "../input-utils";

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
        <ButtonComponent onClick={(event) => handleSaveClick(event)}>
          저장
        </ButtonComponent>
      </ExtendedContainer>
    </FormContainer>
  );
};
