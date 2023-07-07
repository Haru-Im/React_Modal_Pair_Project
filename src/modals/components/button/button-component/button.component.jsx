import { ButtonContentWrapper, ThemedButton } from "../button-style";
import { ATTRIBUTE_PRIMARY, NegativeIcon, PrimaryIcon } from "../button-utils";

export const ButtonComponent = ({ attribute, size, onClick, children }) => {
  return (
    <ThemedButton attribute={attribute} size={size} onClick={onClick}>
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
