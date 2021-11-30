import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import { Provider } from "react-redux";
// import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <Providers>
          <App />
        </Providers>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
