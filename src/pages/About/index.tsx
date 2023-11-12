import dedent from "dedent";
import { Interweave } from "interweave";
import { useEffect, useState } from "react";

import Section from "@/components/base/Section";
import Title from "@/components/base/Title";
import config from "@/configs/main.config";


type AboutProps = {
    pageIndex: number;
};

export default function About({ pageIndex }: AboutProps) {
    const [currContent, setCurrContent] = useState<string>("...");

    useEffect(() => {
        const rawContent = config.about[pageIndex];

        // Replace all the /# tags with double <br /> tags
        const content = rawContent.replace(/\/\#/g, "<br /><br />");

        setCurrContent(content);
    }, [pageIndex]);

    return (
        <Section>
            {pageIndex === 0 && (
                <Title
                    top="Curious?"
                    title="MORE ABOUT ME"
                    bottom="How it started.."
                />
            )}

            {pageIndex === 1 && (
                <h2 className="text-2xl font-semibold md:text-4xl leading-[1em] pb-8 max-sm:pb-7">
                    How it's going..
                </h2>
            )}

            {pageIndex === 2 && (
                <h2 className="text-2xl font-semibold md:text-4xl leading-[1em] pb-8 max-sm:pb-7">
                    What's next?
                </h2>
            )}

            <div className="flex items-center justify-center w-full">
                <p className="w-full h-auto max-w-2xl px-6 text-[15px] whitespace-normal md:text-xl">
                    <Interweave
                        content={
                            dedent(currContent)
                        }
                    />
                </p>
            </div>
        </Section>
    );
}