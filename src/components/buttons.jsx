import { styled } from "styled-components";

export const LargeButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
  border-radius: 8px;
  color: ${(props)=> props.textColor? props.textColor : 'black)'};
  height: 50px;
  width: 200px;
  border: ${(props)=> props.border? props.border : '3px solid green'};
  background-color: ${(props)=> props.backgroundcolor? props.backgroundcolor : 'White'};
  font-weight: 600;

  &:active {
   filter: brightness(70%);
  }
`;


export const MediumButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props)=> props.backgroundcolor ||' green'};
  color: ${(props)=> props.textColor || 'black'};
  height: 45px;
  width: 130px;

  &:active {
   filter: brightness(70%);
  }
`;

export const SmallButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props)=> props.backgroundcolor ||'green'};
  color: ${(props)=> props.textColor || 'rgb(0,0,0)'};
  height: 40px;
  width: 100px;

  &:active {
   filter: brightness(70%);
  }
`;


