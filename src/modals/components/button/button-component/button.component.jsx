import { ButtonContentWrapper, ThemedButton } from "../button-style";
import { ATTRIBUTE_PRIMARY, NegativeIcon, PrimaryIcon } from "../button-utils";

export const ButtonComponent = ({ attribute, size, children }) => {
  return (
    <ThemedButton attribute={attribute} size={size}>
      <ButtonContentWrapper>
        {children}
        {size === "large" &&
          (attribute === ATTRIBUTE_PRIMARY ? (
            <PrimaryIcon />
          ) : (
            <NegativeIcon />
          ))}
      </ButtonContentWrapper>
    </ThemedButton>
  );
};
