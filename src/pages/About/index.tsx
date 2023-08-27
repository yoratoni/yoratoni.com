import { Interweave } from "interweave";
import { useState } from "react";

import config from "@/configs/main.config";


export default function About() {
    const [index, setIndex] = useState(0);

    const upHandler = () => (index > 0) && setIndex(prev => prev - 1);
    const downHandler = () => (index < config.about.length - 1) && setIndex(prev => prev + 1);

    const isFirst = index === 0;
    const isLast = index === config.about.length - 1;

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full max-w-full max-h-full overflow-hidden text-center">
            <div className="flex flex-col items-center justify-center mt-8 space-y-2">
                <h2 className="self-start text-4xl font-semibold indent-6 md:text-6xl">A bit more</h2>
                <h1 className="text-[38px] sm:text-6xl md:text-7xl">INFO&nbsp;ABOUT&nbsp;ME</h1>
                <h3 className="text-xl font-semibold md:text-3xl">...</h3>
            </div>

            <div className="flex items-center justify-between w-full h-auto px-4 mt-8">
                <button
                    className="mr-4 text-4xl font-semibold text-gray-300 max-sm:text-3xl hover:text-gray-100"
                    onClick={() => upHandler()}
                    style={{
                        visibility: isFirst ? "hidden" : "visible"
                    }}
                >
                    &lt;
                </button>

                <div className="w-full max-w-2xl">
                    <Interweave
                        className="text-base text-center whitespace-normal md:text-xl text-shadow-p"
                        content={config.about[index].replace(/(\r\n|\n|\r)/gm, "")}
                    />
                </div>

                <button
                    className="ml-4 text-4xl font-semibold text-gray-300 max-sm:text-3xl hover:text-gray-100"
                    onClick={() => downHandler()}
                    style={{
                        visibility: isLast ? "hidden" : "visible"
                    }}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}