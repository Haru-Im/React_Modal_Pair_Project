import {
  ATTRIBUTE_NEGATIVE,
  ATTRIBUTE_PRIMARY,
  ButtonComponent,
  SIZE_LARGE,
  SIZE_SMALL,
} from "../../button";
import { Container } from "../../styles";
import { ModalComponent } from "../modal-component";
import { useModalOpen } from "../modal-hooks";

export const ModalContainer = ({}) => {
  const [openModal1, openCurrentModal1, closeCurrentModal1] = useModalOpen();
  const [openModal2, openCurrentModal2, closeCurrentModal2] = useModalOpen();

  return (
    <Container>
      <div>
        <ButtonComponent
          attribute={ATTRIBUTE_PRIMARY}
          size={SIZE_SMALL}
          onClick={openCurrentModal1}
        >
          open modal
        </ButtonComponent>
        <ModalComponent
          isOpen={openModal1}
          onClose={closeCurrentModal1}
          $ignoreOverlayClick={true}
        >
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </ModalComponent>
      </div>
      <div>
        <ButtonComponent
          attribute={ATTRIBUTE_NEGATIVE}
          size={SIZE_LARGE}
          onClick={openCurrentModal2}
        >
          open modal
        </ButtonComponent>
        <ModalComponent isOpen={openModal2} onClose={closeCurrentModal2}>
          닫기 버튼 1개가 있고,
          <br />
          외부 영역을 누르면 모달이 닫혀요.
        </ModalComponent>
      </div>
    </Container>
  );
};
