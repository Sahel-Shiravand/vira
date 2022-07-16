import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
const store = createStore(reducer, applyMiddleware(thunk));
import reducer from "./views/pages/login/reducer";
import thunk from "redux-thunk";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>

      <App />

  </Provider>,
  rootElement
);

serviceWorker.unregister();
