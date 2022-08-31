import React from "react";
import "./Header.css";

import { AnimationOnScroll } from "react-animation-on-scroll";


const Header = () => {
    return (
        <header className="header">
            <AnimationOnScroll
                animateIn="animate__fadeInDown"
                animateOnce={true}
            >
                <hgroup>
                    <p className="mb-3 header__subheading">Hi, my name is</p>
                    <h1 className="header__heading">ADRIEN&nbsp;BIBOLLET</h1>

                    <div className="flex items-center justify-center w-full mt-3 text-center">
                        {/* Separates brackets to solve spacing symmetry issues */}
                        <p className="header__subheading">
                            <span className="mr-4 header__subheading">&#123;</span>
                            alias:&nbsp;&quot;Yoratoni&quot;
                            <span className="ml-[0.46rem] header__subheading">&#125;</span>
                        </p>
                    </div>
                </hgroup>

                <div className="header__quick-word">
                    I&apos;m a frontend web developer based in France!
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
            >
                <div className="header__home-intro">
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
            </AnimationOnScroll>
        </header>

    );
};


export default Header;