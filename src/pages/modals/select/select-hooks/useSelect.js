import { useState } from "react";

export const useSelect = (initialOptions) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [options, setOptions] = useState(initialOptions);

  return {
    open,
    selected,
    options,
    setOpen,
    setSelected,
    setOptions,
  };
};
