type ButtonProps = {
    label: string;
    type?: "button" | "submit";
    disabled?: boolean;
    onClick?: () => void;
};

export default function Button(props: ButtonProps) {
    return (
        <button
            type={props.type ?? "button"}
            className={`
                ${props.disabled && "opacity-60 cursor-not-allowed hover:border-gray-300 hover:text-gray-200"}
                border-2 outline-none w-full h-12 bg-black
                font-light md:text-lg text-[15px]
                max-sm:h-10
                shadow-io
                border-gray-400 active:border-gray-200
                text-gray-200
                bg-opacity-30 hover:bg-opacity-50
                rounded-sm
            `}
        >
            {props.label}
        </button>
    );
}