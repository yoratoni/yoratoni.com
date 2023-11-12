import TextareaAutosize from "react-textarea-autosize";


type TextAreaProps = {
    placeholder?: string;
    value: string;
    name?: string;
    maxLength?: number;
    onChange: (value: string) => void;
};


export default function TextArea(props: TextAreaProps) {
    return (
        <TextareaAutosize
            className={`
                border-2 focus:outline-none px-4 py-2 w-full bg-black
                placeholder:text-gray-200 font-light md:text-lg text-[15px]
                resize-y max-h-[12em] min-h-[2.6em]
                shadow-io
                border-gray-300 focus:border-gray-100
                bg-opacity-5 hover:bg-opacity-10 focus:bg-opacity-25
                rounded-sm
            `}
            placeholder={props.placeholder}
            value={props.value}
            name={props.name}
            maxLength={props.maxLength}
            onChange={(e) => props.onChange(e.target.value)}
            minRows={3}
            maxRows={6}
        />
    );
}