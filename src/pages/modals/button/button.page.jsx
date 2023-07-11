import { Title } from "../styles";
import { BtnContainer } from "./button-container";
import { ButtonLayout } from "./button-layout";
import { ATTRIBUTE_NEGATIVE, ATTRIBUTE_PRIMARY } from "./button-utils";

export const ButtonPage = ({}) => {
  return (
    <ButtonLayout>
      <Title>Button</Title>
      <BtnContainer attribute={ATTRIBUTE_PRIMARY} />
      <BtnContainer attribute={ATTRIBUTE_NEGATIVE} />
    </ButtonLayout>
  );
};
