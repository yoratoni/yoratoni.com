import TextareaAutosize from "react-textarea-autosize";


type TextAreaProps = {
    className?: string;
    placeholder?: string;
    value: string;
    maxLength?: number;
    onChange: (value: string) => void;
};


export default function TextArea(props: TextAreaProps) {
    return (
        <TextareaAutosize
            className={`
                ${props.className}
                border-2 border-gray-300
                focus:border-white focus:outline-none p-2 w-full
                focus:border-b-[2px]
                placeholder:text-gray-200 font-extralight md:text-lg text-[15px]
                resize-y bg-black bg-opacity-5 shadow-2xl
                max-h-[12em]
            `}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => {
                if (props.maxLength && e.target.value.length > props.maxLength) return;
                props.onChange(e.target.value);
            }}
            minRows={3}
            maxRows={6}
        />
    );
}