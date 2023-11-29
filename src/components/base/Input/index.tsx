import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";


type InputProps = {
    label?: string;
    placeholder?: string;
    isErrored?: string | null;
    value: string;
    type?: "text" | "password" | "email";
    onFocus?: () => void;
    onChange: (value: string) => void;
};

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            <input
                className={`
                    ${props.isErrored ? "border-red-500 focus:border-red-300 placeholder:text-red-300" : "border-gray-400 placeholder:text-gray-200 focus:border-gray-200"}
                    border-2 focus:outline-none px-4 py-2 w-full bg-black text-white
                    font-light md:text-lg text-[15px] shadow-io
                    rounded-sm
                    bg-opacity-30 hover:bg-opacity-40 focus:bg-opacity-50
                    transition-colors duration-150
                `}
                placeholder={props.placeholder}
                type={props.type}
                name={props.label}
                value={props.value}
                onFocus={props.onFocus}
                onChange={(e) => props.onChange(e.target.value)}
                autoComplete="one-time-code"
            />

            {props.isErrored && (
                <div className="flex justify-center w-full h-4 gap-1">
                    <GppMaybeOutlinedIcon className="!w-5 !h-5 text-sm text-red-500" />

                    <p className="text-sm font-medium text-red-500">
                        {props.isErrored ?? " "}
                    </p>
                </div>
            )}
        </div>
    );
}