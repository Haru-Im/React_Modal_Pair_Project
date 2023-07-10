import { useEffect } from "react";

export const useOutsideClick = (ref, callbackFn, isOpen) => {
  const handleClick = (e) => {
    if (isOpen && ref.current && !ref.current.contains(e.target)) {
      callbackFn();
    }
  };

  // 컴포넌트가 마운트되었을 때 window 객체에 click 이벤트 리스너를 추가
  // 외부 클릭이 모달 창 외부에서 발생했는지 확인 후 모달을 닫음
  useEffect(() => {
    document.addEventListener("click", handleClick);

    // 컴포넌트가 언마운트되었을 때 이 리스너를 제거
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
