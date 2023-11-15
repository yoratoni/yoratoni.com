import { useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";


type TextAreaProps = {
    label?: string;
    placeholder?: string;
    isErrored?: string;
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
        <div className="">
            <TextareaAutosize
                className={`
                    ${props.isErrored ? "border-red-500 placeholder:text-red-400 text-red-400" : "border-gray-400 placeholder:text-gray-200 text-white"}
                    border-2 focus:outline-none px-4 py-2 w-full bg-black
                    font-light md:text-lg text-[15px] shadow-io
                    focus:border-gray-200 rounded-sm resize-none
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
                <p className="w-full px-2 font-medium text-left text-red-500 max-sm:text-sm">
                    {props.isErrored}
                </p>
            )}
        </div>
    );
}