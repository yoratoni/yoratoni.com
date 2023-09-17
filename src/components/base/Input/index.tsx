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
                ${props.className} bg-transparent border border-gray-300
                focus:border-white focus:outline-none p-2 w-full
                placeholder:text-gray-200 font-extralight md:text-xl text-[15px]
            `}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
}