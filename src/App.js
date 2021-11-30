import Header from "./components/Header";
import Routes from "./routes";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "./styles/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
