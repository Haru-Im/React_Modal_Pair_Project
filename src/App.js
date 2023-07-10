import { ThemeProvider } from "styled-components";
import { ModalsPage, theme } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalsPage />
    </ThemeProvider>
  );
}

export default App;
