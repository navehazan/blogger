import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as CustomThemeProvider } from "styled-components";
import { materialTheme, CustomTheme } from "./css/theme";

const { store, persistor } = configureStore();

ReactDOM.render(
  <MaterialThemeProvider theme={materialTheme}>
    <CustomThemeProvider theme={CustomTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </CustomThemeProvider>
  </MaterialThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
