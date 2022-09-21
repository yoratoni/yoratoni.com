import ReactDOM from "react-dom/client";
import React from "react";

import ThemeProvider from "components/molecules/themeProvider/ThemeProvider";
import App from "./App";


const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element..");

ReactDOM.createRoot(rootElement).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);