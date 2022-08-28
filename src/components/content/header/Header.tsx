import React from "react";
import "./Header.css";


const Header = () => {
    return (
        <header className="header">
            <hgroup className="pt-8">
                <p className="mb-3 header__subheading">Hi, my name is</p>
                <h1 className="header__heading">ADRIEN&nbsp;BIBOLLET</h1>

                <div className="flex items-center justify-center w-full mt-2 text-center">
                    {/* Separates brackets to solve spacing symmetry issues */}
                    <p className="header__subheading">
                        <span className="mr-3 header__subheading">&#123;</span>
                        alias:&nbsp;&quot;Yoratoni&quot;
                        <span className="ml-[0.36rem] header__subheading">&#125;</span>
                    </p>
                </div>
            </hgroup>

            <div className="header__quickWord">
                I&apos;m a frontend web developer based in France!
            </div>

            <div className="header__homeIntro">
                <p>
                    With a passion for art-focused programming,
                    my goal is to create unique and incredible projects.
                </p>
                <p>
                    Sometimes on my own, sometimes for someone else,
                    in any case, I want to create the most
                    <span> amazing digital experiences</span>.
                </p>
            </div>
        </header>
    );
};


export default Header;