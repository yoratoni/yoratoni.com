type ButtonProps = {
    label: string;
    disabled?: boolean;
    onClick?: () => void;
};

export default function Button(props: ButtonProps) {
    return (
        <button
            className={`
                ${props.disabled && "opacity-60 cursor-not-allowed hover:border-gray-300 hover:text-gray-200"}
                backdrop-blur-md
                border outline-none w-full h-12 bg-black
                font-extralight md:text-lg text-[15px]
                max-sm:h-10
                shadow-io
                border-gray-400 hover:border-gray-300
                text-gray-200 hover:text-white
                bg-opacity-5 hover:bg-opacity-20
                rounded-sm
            `}
        >
            {props.label}
        </button>
    );
}