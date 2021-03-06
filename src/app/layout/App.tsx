import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode? "dark" : "light",
      background: {
        default: darkMode? '#121212' : '#eaeaea'
      }
    }
  })
  const changeTheme = () => {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} changeTheme={changeTheme} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
