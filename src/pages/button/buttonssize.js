import { styled } from "styled-components";

// LargeButton
const LargeButton = styled.button.attrs((props)=>({

  style:{
    color: props.textcolor? props.textcolor : 'black',
    border: props.border? props.border : '3px solid rgb(85, 239, 196)',
  }
}))`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
  border-radius: 8px;
  background-color: white;

  height: 50px;
  width: 200px;
  
  font-weight: 600;

  &:active {
   filter: brightness(70%);
  }
`;

//MediumButton
const MediumButton = styled.button.attrs((props) => ({
  style: {
    backgroundColor: props.backgroundcolor || 'rgb(85, 239, 196)',
    color: props.textcolor || 'black'
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

//SmallButton
const SmallButton = styled.button.attrs((props) => ({
  style:{
    backgroundColor: props.backgroundcolor || 'rgb(85, 239, 196)',
    color:props.textcolor || 'rgb(0,0,0)'
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

export {LargeButton,MediumButton,SmallButton}
