import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Routes";
import { GlobalStyle } from "./styles/Global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
