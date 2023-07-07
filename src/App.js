import { ThemeProvider } from "styled-components";
import { ButtonLayout, InputLayout, theme } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonLayout />
      <InputLayout />
    </ThemeProvider>
  );
}

export default App;
