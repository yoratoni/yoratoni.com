import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";


const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element..");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);