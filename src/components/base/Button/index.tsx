type ButtonProps = {
    label: string;
    className?: string;
    onClick?: () => void;
};

export default function Button(props: ButtonProps) {
    return (
        <button
            className={`
                ${props.className}
                border-2 border-gray-300 outline-none w-full h-12 hover:border-white
                bg-black bg-opacity-5 shadow-2xl font-extralight md:text-lg text-[15px]
                max-sm:h-10
            `}
        >
            {props.label}
        </button>
    );
}