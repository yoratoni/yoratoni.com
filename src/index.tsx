import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@/App";
import ContentDimensionsProvider from "@/components/Contexts/ContentDimensions";
import PageNumberProvider from "@/components/Contexts/PageNumber";


const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
    <StrictMode>
        <BrowserRouter>
            <ContentDimensionsProvider>
                <PageNumberProvider>
                    <App />
                </PageNumberProvider>
            </ContentDimensionsProvider>
        </BrowserRouter>
    </StrictMode>
);