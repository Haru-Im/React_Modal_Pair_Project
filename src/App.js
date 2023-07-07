import { ThemeProvider } from "styled-components";
import { ButtonLayout, theme } from "./modals";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonLayout />
    </ThemeProvider>
  );
}

export default App;
