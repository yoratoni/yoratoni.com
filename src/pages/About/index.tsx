import Section from "@/components/base/Section";
import Title from "@/components/base/Title";


export default function About({ pageIndex }: { pageIndex: number; }) {
    return (
        <Section>
            <Title
                top="Curious?"
                title="MORE ABOUT ME"
                bottom="How it started.."
            />

            <div className="flex items-center justify-center w-full pb-6">
                <p className="w-full h-auto max-w-2xl px-6 text-[15px] whitespace-pre-wrap md:text-xl">
                    I started programming in 2015, after doing a lot of DIY projects in my workshop,
                    I wanted to create stuff without being limited by the physical world (aka. money).
                    <br /><br />

                    I discovered that it was possible to create anything I wanted with a computer,
                    no need for money or tools anymore, a lot of people were dedicating their time to
                    build open-source tools and libraries that anyone could use for free, and I wanted
                    to be part of this community.

                    A few years later, after a lot of self-learning and beginner projects,
                    I decided to learn web development.
                    <br /><br />
                </p>
            </div>
        </Section>
    );
}