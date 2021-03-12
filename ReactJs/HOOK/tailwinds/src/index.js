import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

<<<<<<< HEAD
import { Provider } from "react-redux";

import store from "./Redux/configStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
=======
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
>>>>>>> ed2f7ecc0c96ed312b0683952a508dc15b04da51
  document.getElementById("root")
);
