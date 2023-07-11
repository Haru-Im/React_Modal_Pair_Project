import { Title } from "../styles";
import { SelectContainer } from "./select-container";

import { SelectLayout } from "./select-layout";

export const SelectPage = ({}) => {
  return (
    <>
      <SelectLayout>
        <Title>Select</Title>
        <SelectContainer />
      </SelectLayout>
    </>
  );
};
