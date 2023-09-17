type TextAreaProps = {
    className?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
};


export default function TextArea(props: TextAreaProps) {
    return (
        <textarea
            className={`
                ${props.className} bg-transparent border border-gray-300
                focus:border-white focus:outline-none p-2 w-full
                placeholder:text-gray-200 font-extralight md:text-xl text-[15px]
                resize-y
                h-[2.7em]
                min-h-[2.7em]
                max-h-[200px]
            `}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
}