import React from 'react';
import { MODAL_STYLES, Overlayed } from './Modalstyle';
import ReactDOM from "react-dom";

function OpenModal1({ modal1, children,}) {
  if (modal1) {
    return ReactDOM.createPortal(
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
  return null;
}

export default OpenModal1;
