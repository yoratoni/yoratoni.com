type InputProps = {
    placeholder?: string;
    value: string;
    type?: "text" | "password" | "email";
    onChange: (value: string) => void;
};


export default function Input(props: InputProps) {
    return (
        <input
            className={`
                border-l border-b focus:outline-none px-4 py-2 w-full bg-transparent
                placeholder:text-gray-200 font-extralight md:text-lg text-[15px]
                shadow-io
                border-gray-300 focus:border-white
                rounded-sm
            `}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
}