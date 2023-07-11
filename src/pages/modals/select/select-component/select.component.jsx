import { memo } from "react";
import { ModalsPortal } from "../../modals.portal";
import { SelectList, SelectOption } from "../select-style";
import { SelectTriggerComponent } from "./select-trigger.component";
import { useSelect } from "../select-hooks";

export const SelectComponent = memo(({ $portal = false, initialOptions }) => {
  const { open, selected, options, setOpen, setSelected } =
    useSelect(initialOptions);

  console.log("portal", $portal);

  return (
    <div>
      <SelectTriggerComponent
        options={options}
        setOpen={setOpen}
        selected={selected}
        open={open}
      />
      {open &&
        ($portal ? (
          <ModalsPortal>
            <SelectList $portal={$portal}>
              {options.map((e, i) => (
                <SelectOption key={i} onMouseDown={() => setSelected(i)}>
                  {e}
                </SelectOption>
              ))}
            </SelectList>
          </ModalsPortal>
        ) : (
          <SelectList $portal={$portal}>
            {options.map((e, i) => (
              <SelectOption key={i} onMouseDown={() => setSelected(i)}>
                {e}
              </SelectOption>
            ))}
          </SelectList>
        ))}
    </div>
  );
});
