import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { DarkSkyService } from "./services";
import { DarkSkyServiceProvider } from "./dark-sky-context";
import ErrorBoundry from "./components/error-boundry";
import store from "./store";
import "./styles/stylesheet.scss";

const weatherService = new DarkSkyService();
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <DarkSkyServiceProvider value={weatherService}>
        <Router>
          <App />
        </Router>
      </DarkSkyServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
