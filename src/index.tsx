import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@/App";
import LayoutDimensionsProvider from "@/components/Contexts/LayoutDimensions";
import PageNumberProvider from "@/components/Contexts/PageNumber";
import ReCaptchaWrapper from "@/components/Contexts/ReCaptchaWrapper";


const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
    <BrowserRouter>
        <ReCaptchaWrapper>
            <LayoutDimensionsProvider>
                <PageNumberProvider>
                    <App />
                </PageNumberProvider>
            </LayoutDimensionsProvider>
        </ReCaptchaWrapper>
    </BrowserRouter>
);