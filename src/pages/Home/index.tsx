export default function Home() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full max-w-full max-h-full overflow-hidden text-center">
            <div className="flex flex-col items-center justify-center mt-8 space-y-2">
                <h2 className="self-start text-4xl font-semibold indent-6 md:text-6xl">Hi!, I&apos;m</h2>
                <h1 className="text-[38px] sm:text-6xl md:text-7xl">ADRIEN&nbsp;BIBOLLET</h1>
                <h3 className="text-xl font-semibold md:text-3xl">Full-stack web developer</h3>
            </div>

            <p className="w-full max-w-2xl px-6 pt-8 text-base whitespace-pre-wrap md:text-xl">
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
    );
}