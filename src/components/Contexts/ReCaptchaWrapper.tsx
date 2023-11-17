import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import config from "@/configs/main.config";


export default function ReCaptchaWrapper({ children }: { children: ReactNode; }) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={config.recaptchaKey}
            language="en"
            useRecaptchaNet={true}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
}