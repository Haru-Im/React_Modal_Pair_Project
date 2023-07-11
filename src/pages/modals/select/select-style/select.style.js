import styled from "styled-components";

export const HiddenLayout = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  position: relative;
`;

export const SelectList = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  z-index: 2;
  background-color: #fff;
  width: 300px;
  position: ${(props) => (props.$portal ? "absolute" : "relative")};
  top: ${(props) => (props.$portal ? "670px" : "9px")};

  overflow: hidden;
`;

export const SelectOption = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 40px;

  &:hover {
    background-color: #eee;
  }

  :first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  :last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;
