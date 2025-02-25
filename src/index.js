import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";
import {Provider} from 'react-redux'
import Store from './components/store'

const App = (
  <Provider store ={Store}>
  <React.StrictMode>
    <Router />
  </React.StrictMode>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
