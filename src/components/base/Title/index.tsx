type TitleProps = {
    top: string,
    title: string,
    bottom?: string;
};

export default function Title(props: TitleProps) {
    return (
        <div className="flex flex-col items-center justify-center pb-8 space-y-2 max-sm:pb-7">
            <h2 className="self-start text-4xl font-semibold indent-6 md:text-6xl">
                {props.top}
            </h2>

            <h1 className="text-[36px] sm:text-6xl md:text-7xl leading-[1em]">
                {props.title}
            </h1>

            <h3 className="text-xl font-semibold md:text-3xl leading-[1em]">
                {props.bottom ?? "..."}
            </h3>
        </div>
    );
}