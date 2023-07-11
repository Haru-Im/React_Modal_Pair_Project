import { styled } from "styled-components";

const Inputbox = styled.input`
    border: 1px solid black;
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;

    &:focus{
        border:2px solid black;
    }
  `;

const Inputcontainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

export {Inputbox,Inputcontainer}