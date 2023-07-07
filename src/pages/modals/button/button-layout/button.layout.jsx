import { Layout, Title } from "../../styles";
import { BtnContainer } from "../button-container";

import { ATTRIBUTE_NEGATIVE, ATTRIBUTE_PRIMARY } from "../button-utils";

export const ButtonLayout = ({}) => {
  return (
    <Layout>
      <Title>Button</Title>
      <BtnContainer attribute={ATTRIBUTE_PRIMARY} />
      <BtnContainer attribute={ATTRIBUTE_NEGATIVE} />
    </Layout>
  );
};
