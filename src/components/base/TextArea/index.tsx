import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";


type TextAreaProps = {
    placeholder?: string;
    value: string;
    maxLength?: number;
    onChange: (value: string) => void;
};


export default function TextArea(props: TextAreaProps) {
    const [lineBreaks, setLineBreaks] = useState(0);

    useEffect(() => {
        if (props.maxLength) {
            const lineBreaks = Math.ceil(props.value.length / props.maxLength);
            setLineBreaks(lineBreaks);
        }
    }, [props.value]);

    return (
        <TextareaAutosize
            className={`
                backdrop-blur-md
                border focus:outline-none px-4 py-2 w-full bg-black bg-opacity-5
                placeholder:text-gray-200 font-extralight md:text-lg text-[15px]
                resize-y max-h-[12em]
                shadow-io
                border-gray-400 focus:border-gray-300
                rounded-sm
            `}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => {
                if (
                    props.maxLength &&
                    e.target.value.length > props.maxLength
                ) return;

                props.onChange(e.target.value);
            }}
            minRows={3}
            maxRows={6}
        />
    );
}