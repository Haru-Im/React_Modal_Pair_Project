import { styled } from "styled-components";

export const LargeButton = styled.button.attrs((props)=>({

  style:{
    color: props.textColor? props.textColor : 'black)',
    border: props.border? props.border : '3px solid green',
    backgroundColor: props.backgroundcolor? props.backgroundcolor : 'White'
  }
}))`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
  border-radius: 8px;

  height: 50px;
  width: 200px;
  
  font-weight: 600;

  &:active {
   filter: brightness(70%);
  }
`;


export const MediumButton = styled.button.attrs((props) => ({
  style: {
    backgroundColor: props.backgroundcolor || 'green',
    color: props.textColor || 'black'
  }
}))`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  height: 45px;
  width: 130px;

  &:active {
    filter: brightness(70%);
  }
`;


export const SmallButton = styled.button.attrs((props) => ({
  style:{
    backgroundColor: props.backgroundcolor || 'green',
    color:props.textColor || 'rgb(0,0,0)'
  }

}))`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  height: 40px;
  width: 100px;

  &:active {
   filter: brightness(70%);
  }
`;


