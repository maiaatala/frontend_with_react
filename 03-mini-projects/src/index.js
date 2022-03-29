import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { AppProvider } from "./03-sidebarModal/context";
// import { AppProvider } from "./04-stripeMenus/context";

ReactDOM.render(
  <React.StrictMode>
    {/* <AppProvider>
      <App />
    </AppProvider> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
