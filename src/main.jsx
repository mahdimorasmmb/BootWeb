import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Layout } from "./components/Layout";
import { Pages } from "./components/Pages";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Pages />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
