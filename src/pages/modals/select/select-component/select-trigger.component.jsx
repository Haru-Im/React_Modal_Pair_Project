import { SelectButton } from "../select-style";

export const SelectTriggerComponent = ({
  open,
  setOpen,
  selected,
  options,
}) => {
  let selectedItem = options[selected];

  return (
    <SelectButton
      onBlur={() => setOpen(false)}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div>{selectedItem || options[0]}</div>
      <div>▼</div>
    </SelectButton>
  );
};
