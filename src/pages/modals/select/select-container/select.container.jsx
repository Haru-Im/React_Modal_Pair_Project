import { Container } from "../../styles";
import { SelectComponent } from "../select-component";

const initialOptions = ["리액트", "자바", "스프링", "리액트네이티브"];

export const SelectContainer = ({}) => {
  return (
    <>
      <Container>
        <SelectComponent $portal initialOptions={initialOptions} />
        <SelectComponent initialOptions={initialOptions} />
      </Container>
    </>
  );
};
