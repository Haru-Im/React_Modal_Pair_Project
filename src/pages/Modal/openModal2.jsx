import React from 'react'
import { MODAL_STYLES, Overlayed } from './modalstyle'
import  ReactDOM  from 'react-dom';

function OpenModal2({modal2, children}) {

    if (modal2) {
  
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

export default OpenModal2