import { styled } from "styled-components";

const Overlayed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

 const MODAL_STYLES = styled.div`
  /* width: 500px;
    height: 300px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 100px;
  z-index: 1000;
  border-radius: 15px;
`;

export {Overlayed,MODAL_STYLES}