import styled from "styled-components";
import { ATTRIBUTE_PRIMARY } from "../button-utils";

export const ThemedButton = styled.button`
  cursor: pointer;
  border-radius: 8px;

  color: ${(props) =>
    props.size === "large"
      ? props.theme.attributes[props.attribute]?.color ||
        props.theme.attributes[ATTRIBUTE_PRIMARY].color
      : props.theme.attributes[props.attribute]?.color};

  border: ${(props) =>
    props.size === "large"
      ? `3px solid ${
          props.theme.attributes[props.attribute]?.borderColor ||
          props.theme.attributes[ATTRIBUTE_PRIMARY].borderColor
        }`
      : "none"};

  background-color: ${(props) =>
    props.size === "large"
      ? "rgb(255, 255, 255)"
      : props.theme.attributes[props.attribute]?.backgroundColor ||
        props.theme.attributes[ATTRIBUTE_PRIMARY].backgroundColor};

  &:active {
    background-color: ${(props) =>
      props.theme.attributes[props.attribute]?.activeBackgroundColor[
        props.size
      ] ||
      props.theme.attributes[props.attribute]?.activeBackgroundColor[
        props.size
      ]};
  }

  height: ${(props) =>
    props.theme.size[props.size]?.height || props.theme.size.large.height};

  width: ${(props) =>
    props.theme.size[props.size]?.width || props.theme.size.large.width};

  font-weight: ${(props) =>
    props.theme.size[props.size]?.fontWeight ||
    props.theme.size.large.fontWeight};
`;

export const ButtonContentWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 7px;
`;

export const IconWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
