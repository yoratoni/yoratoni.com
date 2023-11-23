// eslint-disable-next-line import/no-named-as-default
import ReCAPTCHA from "react-google-recaptcha";

import config from "@/configs/main.config";


type CaptchaButtonProps = {
    label: string;
    disabled?: boolean;
    onClick?: () => void;
};

export default function CaptchaButton(props: CaptchaButtonProps) {
    return (
        <button
            type="submit"
            onClick={props?.onClick}
            className={`
                ${props.disabled && "opacity-60 cursor-not-allowed !border-gray-400"}
                relative
                border-2 bg-black
                font-light md:text-lg text-[15px]
                max-sm:h-10
                shadow-io
                border-gray-400 hover:border-gray-300 active:border-gray-200
                text-gray-200
                bg-opacity-30 hover:bg-opacity-40 active:bg-opacity-50
                rounded-sm
                transition-colors duration-150
                focus-visible:border-gray-300
            `}
        >
            <ReCAPTCHA
                sitekey={config.contact.reCaptcha.siteKey}
            />
        </button>
    );
}