import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

function Modals({ children, modal1, modal2,  }) {
  if (modal1 && !modal2 ) {
    return ReactDOM.createPortal (
      <>
        <Overlayed>
          <MODAL_STYLES>
            <div>{children}</div>
          </MODAL_STYLES>
        </Overlayed>
      </>,
      document.getElementById('portal')
    );
  }
  else if (modal2) {
  
    return ReactDOM.createPortal(
      <>
        <Overlayed>
          <MODAL_STYLES onClick={(e)=> e.stopPropagation()}>
          <div>  {children}</div>
          </MODAL_STYLES>
        </Overlayed>
      </>,
    document.getElementById('portal')
    )
  }

  return null;

}

export default Modals;

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

const Overlayed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
