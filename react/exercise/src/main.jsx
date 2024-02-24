import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";

import "./index.css";

const fetcher = async (url) => {
    try {
      return (await fetch(url)).json();
    } catch (error) {
      throw new Error(error.message);
    }
  };

ReactDOM.createRoot(document.getElementById("root")).render(
  <SWRConfig value={{ fetcher }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SWRConfig>
);
