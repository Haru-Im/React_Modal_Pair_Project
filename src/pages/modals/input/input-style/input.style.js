import styled from "styled-components";
import { INPUT_NAME, INPUT_PRICE } from "../input-utils";
import { Container } from "../../styles";

export const FormContainer = styled.form`
  display: block;
  margin-top: 0em;
`;

export const ExtendedContainer = styled(Container)`
  gap: 30px;
`;

export const Input = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
`;
