import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const ModalsPortal = ({ children }) => {
  // portal id 를 가진 element를 가져옴
  const mount = document.getElementById("portal-target");

  // portal에다가 집어넣을 div
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    // 애들이 다 잘 있으면, portal 로 감싼 애들을
    // <div id="portal">
    //   <div>
    //     {children}
    //   </div>
    // </div>
    // 이런형태로 집어넣어버림!

    const currentEl = el.current;

    if (mount) {
      mount.appendChild(currentEl);
      return () => mount.removeChild(currentEl);
    }
  }, [mount]);

  return createPortal(children, el.current);
};

// ReactDOM.createPortal : 자식 노드를 부모가 아닌 다른 DOM 노드로 렌더링하도록 하는데 사용
