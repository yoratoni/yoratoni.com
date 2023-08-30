import { Interweave } from "interweave";
import { useState } from "react";

import Section from "@/components/base/Section";
import Title from "@/components/base/Title";
import config from "@/configs/main.config";


export default function About() {
    const [index, setIndex] = useState(0);

    const upHandler = () => (index > 0) && setIndex(prev => prev - 1);
    const downHandler = () => (index < config.about.length - 1) && setIndex(prev => prev + 1);

    const isFirst = index === 0;
    const isLast = index === config.about.length - 1;

    return (
        <Section>
            <Title
                top="A bit more"
                title="INFO ABOUT ME"
            />

            <div className="flex items-center justify-between w-full px-4">
                <button
                    className="mr-4 text-5xl font-semibold text-gray-300 max-sm:text-3xl hover:text-gray-100"
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
                    className="ml-4 text-5xl font-semibold text-gray-300 max-sm:text-3xl hover:text-gray-100"
                    onClick={() => downHandler()}
                    style={{
                        visibility: isLast ? "hidden" : "visible"
                    }}
                >
                    &gt;
                </button>
            </div>
        </Section>
    );
}