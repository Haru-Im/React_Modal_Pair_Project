import { HiddenLayout } from "../select-style";

export const SelectLayout = ({ children }) => (
  <div>
    <HiddenLayout>{children}</HiddenLayout>
  </div>
);
