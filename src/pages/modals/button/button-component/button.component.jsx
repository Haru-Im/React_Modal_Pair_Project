import { ButtonContentWrapper, ThemedButton } from "../button-style";
import {
  ATTRIBUTE_PRIMARY,
  NegativeIcon,
  PrimaryIcon,
  SIZE_LARGE,
} from "../button-utils";

export const ButtonComponent = ({
  attribute,
  size,
  onClick,
  icon,
  children,
}) => {
  return (
    <ThemedButton attribute={attribute} size={size} onClick={onClick}>
      <ButtonContentWrapper>
        {children}
        {size === SIZE_LARGE &&
          icon === true &&
          (attribute === ATTRIBUTE_PRIMARY ? (
            <PrimaryIcon />
          ) : (
            <NegativeIcon />
          ))}
      </ButtonContentWrapper>
    </ThemedButton>
  );
};
