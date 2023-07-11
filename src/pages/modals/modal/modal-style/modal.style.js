import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
`;

export const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);

  width: ${(props) => (props.$ignoreOverlayClick ? "500px" : "300px")};
  height: ${(props) => (props.$ignoreOverlayClick ? "300px" : "200px")};
`;

export const ButtonWrapper = styled.div`
  display: ${(props) => (props.$ignoreOverlayClick ? "flex" : "")};
  position: absolute;
  right: 12px;
  top: ${(props) => (props.$ignoreOverlayClick ? "" : "12px")};
  bottom: ${(props) => (props.$ignoreOverlayClick ? "12px" : "")};
  gap: ${(props) => (props.$ignoreOverlayClick ? "5px" : "")};
`;

export const CloseButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    border: 1px px solid rgb(51, 51, 51);
  }
`;
