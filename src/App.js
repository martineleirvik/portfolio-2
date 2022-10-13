import Portfolio from "./components/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Portfolio />
      </ThemeProvider>
    </div>
  );
}

export default App;
