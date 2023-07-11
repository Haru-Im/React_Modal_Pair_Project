import { Title } from "../styles";
import { ModalContainer } from "./modal-container";
import { ModalLayout } from "./modal-layout";

export const ModalPage = ({}) => {
  return (
    <ModalLayout>
      <Title>Modal</Title>
      <ModalContainer />
    </ModalLayout>
  );
};
