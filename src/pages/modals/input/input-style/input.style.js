import styled from "styled-components";
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

  &:focus {
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 1px;
  }
`;
