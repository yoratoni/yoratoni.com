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
                border focus:outline-none px-4 py-2 w-full bg-black
                placeholder:text-gray-200 font-extralight md:text-lg text-[15px]
                shadow-io
                border-gray-400 focus:border-gray-300
                bg-opacity-5 hover:bg-opacity-10 focus:bg-opacity-25
                rounded-sm
            `}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
}