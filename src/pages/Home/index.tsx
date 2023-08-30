import Section from "@/components/base/Section";
import Title from "@/components/base/Title";


export default function Home() {
    return (
        <Section>
            <Title
                top="Hello, I'm"
                title="ADRIEN BIBOLLET"
                bottom="Full-stack web developer"
            />

            <div className="flex items-center justify-center w-full">
                <p className="w-full h-auto max-w-2xl px-6 text-base whitespace-pre-wrap md:text-xl">
                    I&apos;m a self-taught French web developer with a passion for Web 3.0 and specialized in React, NextJS, Typescript
                    & Solidity.
                    <br />
                    <br />
                    Currently working at&nbsp;
                    <a
                        className="font-medium hover:underline"
                        href="https://alien.club/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Alien
                    </a>
                    &nbsp;as a full-stack / Web 3.0 developer, my goal is to create new projects from scratch, using the
                    latest technologies including&nbsp;
                    <a
                        className="font-medium hover:underline"
                        href="https://eips.ethereum.org/EIPS/eip-4337"
                        target="_blank"
                        rel="noreferrer"
                    >
                        ERC&#8209;4337
                    </a>
                    &nbsp;to facilitate user experience with the blockchain,
                    and to contribute to the development of the Web 3.0 ecosystem.
                </p>
            </div>

            <div className="absolute bottom-0 w-full pb-4 text-base leading-7 text-center text-gray-500 max-sm:leading-4 max-sm:text-xs max-sm:pb-1">
                <p className="font-[500] tracking-widest">&gt; Swipe on mobile &lt;</p>
                <p className="font-[500] tracking-widest">&gt; Scroll on desktop &lt;</p>
                <p className="font-[500] tracking-widest">&gt; Background by Digital Moons &lt;</p>
            </div>
        </Section>
    );
}