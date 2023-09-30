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
                backdrop-blur-md
                border focus:outline-none px-4 py-2 w-full bg-black bg-opacity-5
                placeholder:text-gray-200 font-extralight md:text-lg text-[15px]
                shadow-io
                border-gray-400 focus:border-gray-300
                rounded-sm
            `}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
}