import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
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
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
