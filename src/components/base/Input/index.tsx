type InputProps = {
    className?: string;
    placeholder?: string;
    value: string;
    type?: "text" | "password" | "email";
    onChange: (value: string) => void;
};


export default function Input(props: InputProps) {
    return (
        <input
            className={`
                ${props.className}
                border-2 border-gray-300
                focus:border-white focus:outline-none p-2 w-full
                placeholder:text-gray-200 font-extralight md:text-lg text-[15px]
                bg-black bg-opacity-5 shadow-2xl
            `}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
}