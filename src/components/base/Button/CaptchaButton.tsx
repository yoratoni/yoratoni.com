import { useRef } from "react";
import { useRecaptcha } from "react-hook-recaptcha";

import config from "@/configs/main.config";


type CaptchaButtonProps = {
    label: string;
    disabled?: boolean;
    onClick?: (token: string) => void;
};

export default function CaptchaButton(props: CaptchaButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    const successCallback = (token: string) => {
        if (props.onClick) {
            props.onClick(token);
        }
    };

    const { recaptchaLoaded, execute, reset } = useRecaptcha({
        containerId: config.contact.reCaptcha.containerId,
        successCallback,
        sitekey: config.contact.reCaptcha.siteKey,
        size: "invisible"
    });

    const handleClick = () => {
        if (ref.current !== null) {
            reset();
            execute();
        }
    };

    return (
        <button
            type="submit"
            ref={ref}
            onClick={handleClick}
            disabled={props?.disabled || !recaptchaLoaded}
            className={`
                ${props.disabled && "opacity-60 cursor-not-allowed !border-gray-400"}
                relative
                border-2 w-full h-12 bg-black
                font-light md:text-lg text-[15px]
                max-sm:h-10
                shadow-io
                border-gray-400 hover:border-gray-300 active:border-gray-200
                text-gray-200
                bg-opacity-30 hover:bg-opacity-40 active:bg-opacity-50
                rounded-sm
                transition-colors duration-150
                focus-visible:border-gray-300
                disabled:bg-gray-700
            `}
        >
            {props.label}

            <div id={config.contact.reCaptcha.containerId} />
        </button>
    );
}