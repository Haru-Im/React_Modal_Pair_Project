import { useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import {
  ATTRIBUTE_NEGATIVE,
  ATTRIBUTE_PRIMARY,
  ButtonComponent,
  SIZE_SMALL,
} from "../../button";
import {
  ButtonWrapper,
  CloseButton,
  Modallll,
  ModalOverlay,
} from "../modal-style";
import { useOutsideClick } from "../modal-hooks";

export const ModalComponent = ({
  isOpen,
  onClose,
  $ignoreOverlayClick = false,
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

  // ReactDOM.createPortal : 자식 노드를 부모가 아닌 다른 DOM 노드로 렌더링하도록 하는데 사용
  return ReactDOM.createPortal(
    <div id="portal-target">
      <ModalOverlay />
      <Modallll ref={modalRef} $ignoreOverlayClick={$ignoreOverlayClick}>
        <div>{children}</div>
        {$ignoreOverlayClick ? (
          <ButtonWrapper $ignoreOverlayClick={true}>
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
      </Modallll>
    </div>,
    // 렌더링되는 곳
    document.body
  );
};
