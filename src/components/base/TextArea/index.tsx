import TextareaAutosize from "react-textarea-autosize";


type TextAreaProps = {
    placeholder?: string;
    value: string;
    maxLength?: number;
    onChange: (value: string) => void;
};


export default function TextArea(props: TextAreaProps) {
    return (
        <TextareaAutosize
            className={`
                border-l border-b focus:outline-none px-4 py-2 w-full bg-transparent
                placeholder:text-gray-200 font-extralight md:text-lg text-[15px]
                resize-y max-h-[12em]
                shadow-io
                border-gray-300 focus:border-white
                rounded-sm
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