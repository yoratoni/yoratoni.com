import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import { useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";


type TextAreaProps = {
    label?: string;
    placeholder?: string;
    isErrored?: string | null;
    value: string;
    minRows?: number;
    maxRows?: number;
    onFocus?: () => void;
    onChange: (value: string) => void;
};


export default function TextArea(props: TextAreaProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const lineBreaks = (event.target.value.match(/\n/g) || []).length;

        if (props.maxRows && (lineBreaks >= props.maxRows)) return;
        props.onChange(event.target.value);
    };

    return (
        <div className="flex flex-col gap-2">
            <TextareaAutosize
                className={`
                    ${props.isErrored ? "border-red-500 focus:border-red-300 placeholder:text-red-300" : "border-gray-400 placeholder:text-gray-200 focus:border-gray-200"}
                    border-2 focus:outline-none px-4 py-2 w-full bg-black text-white
                    font-light md:text-lg text-[15px] shadow-io
                    rounded-sm resize-none
                    bg-opacity-30 hover:bg-opacity-40 focus:bg-opacity-50
                    transition-colors duration-150
                `}
                ref={textAreaRef}
                placeholder={props.placeholder}
                value={props.value}
                name={props.label}
                onFocus={props.onFocus}
                onChange={handleOnChange}
                autoComplete="one-time-code"
                minRows={props.minRows ?? 3}
                maxRows={props.maxRows ?? 3}
            />

            {props.isErrored && (
                <div className="flex justify-center w-full gap-1">
                    <GppMaybeOutlinedIcon className="!w-5 !h-5 text-sm text-red-500" />

                    <p className="text-sm font-medium text-red-500">
                        {props.isErrored ?? " "}
                    </p>
                </div>
            )}
        </div>
    );
}