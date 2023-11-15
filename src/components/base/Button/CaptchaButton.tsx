type CaptchaButtonProps = {
    label: string;
    type?: "button" | "submit";
    disabled?: boolean;
    onClick?: () => void;
};

export default function CaptchaButton(props: CaptchaButtonProps) {
    return (
        <button
            type={props.type ?? "button"}
            className={`
                ${props.disabled && "opacity-60 cursor-not-allowed !border-gray-400"}
                border-2 outline-none w-full h-12 bg-black
                font-light md:text-lg text-[15px]
                max-sm:h-10
                shadow-io
                border-gray-400 hover:border-gray-300 active:border-gray-200
                text-gray-200
                bg-opacity-30 hover:bg-opacity-40 active:bg-opacity-50
                rounded-sm
                transition-colors duration-150
            `}
        >
            {props.label}
        </button>
    );
}