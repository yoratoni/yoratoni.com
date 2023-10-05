import { Interweave } from "interweave";

import Section from "@/components/base/Section";
import Title from "@/components/base/Title";
import config from "@/configs/main.config";


export default function About({ pageIndex }: { pageIndex: number; }) {
    return (
        <Section>
            {pageIndex === 0 && (
                <Title
                    top="Curious?"
                    title="MORE ABOUT ME"
                    bottom="How it started.."
                />
            )}

            <div className="flex items-center justify-center w-full pb-6">
                <p className="w-full h-auto max-w-2xl px-6 text-[15px] whitespace-pre-wrap md:text-xl">
                    <Interweave content={config.about[pageIndex]} />
                </p>
            </div>
        </Section>
    );
}