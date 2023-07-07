import { ButtonComponent } from "../button-component";
import { handleClick } from "../button-handler/button.handler";
import { Container } from "../button-style";
import {
  ATTRIBUTE_NEGATIVE,
  ATTRIBUTE_PRIMARY,
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
} from "../button-utils";

export const BtnContainer = ({ attribute }) => {
  if (attribute === ATTRIBUTE_PRIMARY) {
    return (
      <Container>
        <ButtonComponent
          attribute={attribute}
          size={SIZE_LARGE}
          onClick={() => handleClick(ATTRIBUTE_PRIMARY)}
        >
          Large Primary Button
        </ButtonComponent>
        <ButtonComponent attribute={attribute} size={SIZE_MEDIUM}>
          Medium
        </ButtonComponent>
        <ButtonComponent attribute={attribute} size={SIZE_SMALL}>
          Small
        </ButtonComponent>
      </Container>
    );
  }

  if (attribute === ATTRIBUTE_NEGATIVE) {
    return (
      <Container>
        <ButtonComponent attribute={attribute} size={SIZE_LARGE}>
          Large Negative Button
        </ButtonComponent>
        <ButtonComponent attribute={attribute} size={SIZE_MEDIUM}>
          Medium
        </ButtonComponent>
        <ButtonComponent attribute={attribute} size={SIZE_SMALL}>
          Small
        </ButtonComponent>
      </Container>
    );
  }
};
