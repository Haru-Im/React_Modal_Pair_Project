// @ts-nocheck
import { useCallback, useRef } from "react";
import {
  ATTRIBUTE_NEGATIVE,
  ATTRIBUTE_PRIMARY,
  ButtonComponent,
  SIZE_SMALL,
} from "../../button";
import {
  ButtonWrapper,
  CloseButton,
  Modal,
  ModalOverlay,
} from "../modal-style";
import { useOutsideClick } from "../modal-hooks";
import { ModalsPortal } from "../../modals.portal";

export const ModalComponent = ({
  isOpen,
  onClose,
  $ignoreOverlayClick,
  children,
}) => {
  const modalRef = useRef();

  const handleOutsideClick = useCallback(() => {
    if (!$ignoreOverlayClick) {
      onClose();
    }
  }, [$ignoreOverlayClick, onClose]);

  useOutsideClick(modalRef, handleOutsideClick, isOpen);

  if (!isOpen) {
    return null;
  }

  const modal = (
    <>
      <ModalOverlay />
      <Modal ref={modalRef} $ignoreOverlayClick={$ignoreOverlayClick}>
        <div>{children}</div>
        {$ignoreOverlayClick ? (
          <ButtonWrapper $ignoreOverlayClick>
            <ButtonComponent
              attribute={ATTRIBUTE_NEGATIVE}
              size={SIZE_SMALL}
              onClick={onClose}
            >
              닫기
            </ButtonComponent>
            <ButtonComponent
              attribute={ATTRIBUTE_PRIMARY}
              size={SIZE_SMALL}
              onClick={onClose}
            >
              확인
            </ButtonComponent>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper $ignoreOverlayClick={false}>
            <CloseButton onClick={onClose}>X</CloseButton>
          </ButtonWrapper>
        )}
      </Modal>
    </>
  );

  return <ModalsPortal>{modal}</ModalsPortal>;
};
