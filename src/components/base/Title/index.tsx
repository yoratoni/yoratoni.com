type TitleProps = {
    top: string,
    title: string,
    bottom?: string;
};

export default function Title(props: TitleProps) {
    return (
        <div className="flex flex-col items-center justify-center pb-8 space-y-2 max-sm:pb-5">
            <h2 className="self-start text-3xl font-semibold indent-6 md:hlg:text-4xl ">
                {props.top}
            </h2>

            <h1 className="text-[36px] sm:text-6xl md:hlg:text-7xl leading-[1em]">
                {props.title}
            </h1>

            <h3 className="self-center px-2 text-3xl font-semibold md:hlg:text-4xl">
                {props.bottom ?? "..."}
            </h3>
        </div>
    );
}