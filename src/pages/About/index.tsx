import dedent from "dedent";
import { Interweave } from "interweave";
import { useEffect, useState } from "react";

import Section from "@/components/base/Section";
import Title from "@/components/base/Title";
import config from "@/configs/main.config";


export default function About({ pageIndex }: { pageIndex: number; }) {
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