import GlobalCss from "./styles";
import { Provider } from "react-redux";
import Rotas from "./routes";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalCss />
          <Rotas />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
