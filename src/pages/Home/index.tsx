import Link from "@/components/base/Link";
import Section from "@/components/base/Section";
import Title from "@/components/base/Title";


export default function Home() {
    return (
        <Section>
            <Title
                top="Hello, I'm"
                title="ADRIEN BIBOLLET"
                bottom="Full stack web developer"
            />

            <div className="flex items-center justify-center w-full">
                <p className="w-full h-auto max-w-2xl px-6 text-[15px] whitespace-pre-wrap md:text-xl max-sm:pb-16">
                    I&apos;m a self-taught French web developer with a passion for Web 3.0 and specialized in
                    <b> React</b>, <b>Next.js</b>, <b>Node JS</b>, <b>Typescript</b> and <b>Solidity</b>.
                    <br />
                    <br />
                    Currently working at&nbsp;
                    <Link
                        label="Alien"
                        href="https://alien.club/"
                    />
                    &nbsp;as a full stack developer, I&apos;m building an entire ecosystem & multiple products
                    around the NFT / AI space. Mostly working on the smart contracts, backend and frontend using
                    Hardhat, React and Next.js.
                </p>
            </div>

            <div className="absolute bottom-0 w-full pb-4 text-base leading-8 text-center text-gray-500 max-sm:leading-5 max-sm:text-[13px] max-sm:pb-3 flex flex-col items-center justify-center max-hmd:pb-3">
                <p className="font-[500] tracking-widest text-white max-hlg:hidden">&gt; Scroll on desktop | Swipe on mobile &lt;</p>
                <p className="font-[500] tracking-widest max-hlg:hidden">&gt; This site is protected by reCAPTCHA &lt;</p>
                <p className="font-[500] tracking-widest max-hlg:hidden">
                    &gt; and the Google&nbsp;
                    <Link
                        label="Privacy Policy"
                        href="https://policies.google.com/privacy"
                        fontWeight="semibold"
                    />
                    &nbsp;&lt;
                </p>
                <p className="font-[500] tracking-widest max-hlg:hidden">
                    &gt; and&nbsp;
                    <Link
                        label="Terms of Service"
                        href="https://policies.google.com/terms"
                        fontWeight="semibold"
                    />
                    &nbsp;apply &lt;
                </p>

                <p className="font-[500] tracking-widest hlg:hidden px-4 max-sm:pb-2 leading-7">
                    This site is protected by reCAPTCHA<br />
                    and the Google&nbsp;
                    <Link
                        label="Privacy Policy"
                        href="https://policies.google.com/privacy"
                        fontWeight="semibold"
                    /> and&nbsp;
                    <Link
                        label={<>Terms of<br />Service</>}
                        href="https://policies.google.com/terms"
                        fontWeight="semibold"
                    />
                    &nbsp;apply.
                </p>

                <p className="font-[500] tracking-widest text-white">
                    &gt; Background by&nbsp;
                    <Link
                        label="Digital Moons"
                        href="https://digitalmoons.itch.io/"
                    />
                    &nbsp;&lt;
                </p>
            </div>
        </Section>
    );
}