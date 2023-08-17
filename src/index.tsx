import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App";
import ContentDimensionsProvider from "@/components/Contexts/ContentDimensions";
import PageNumberProvider from "@/components/Contexts/PageNumber";


const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
    <StrictMode>
        <ContentDimensionsProvider>
            <PageNumberProvider>
                <App />
            </PageNumberProvider>
        </ContentDimensionsProvider>
    </StrictMode>
);