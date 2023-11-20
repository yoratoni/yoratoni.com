type InputProps = {
    label?: string;
    placeholder?: string;
    isErrored?: string;
    value: string;
    type?: "text" | "password" | "email";
    onFocus?: () => void;
    onChange: (value: string) => void;
};

export default function Input(props: InputProps) {
    return (
        <div className="">
            <input
                className={`
                    ${props.isErrored ? "border-red-500 placeholder:text-red-400 text-red-400" : "border-gray-400 placeholder:text-gray-200 text-white"}
                    border-2 focus:outline-none px-4 py-2 w-full bg-black
                    font-light md:text-lg text-[15px] shadow-io
                    focus:border-gray-200 rounded-sm
                    bg-opacity-30 hover:bg-opacity-40 focus:bg-opacity-50
                    transition-colors duration-150
                `}
                placeholder={props.isErrored ? props.isErrored : props.placeholder}
                type={props.type}
                name={props.label}
                value={props.value}
                onFocus={props.onFocus}
                onChange={(e) => props.onChange(e.target.value)}
                autoComplete="one-time-code"
            />
        </div>
    );
}