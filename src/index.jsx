import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";
// import * as serviceWorker from './serviceWorker'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
