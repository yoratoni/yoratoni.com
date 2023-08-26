export default function Home() {
    return (
        <div className="relative flex items-center justify-center w-full h-full max-w-full max-h-full overflow-hidden">
            <div className="flex flex-col items-center justify-center w-full text-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <h2 className="self-start text-4xl font-semibold indent-6 md:text-6xl">Hi!, I&apos;m</h2>
                    <h1 className="text-5xl md:text-7xl">ADRIEN&nbsp;BIBOLLET</h1>
                    <h3 className="text-xl font-semibold md:text-3xl">Full-stack web developer</h3>
                </div>

                <p className="w-full max-w-xl pt-8 text-base md:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod blanditiis officiis dolor molestias id obcaecati tempore enim ea doloremque,
                    fugiat fugit vel incidunt culpa? Deserunt odit sit nam pariatur soluta!
                </p>
            </div>
        </div>
    );
}