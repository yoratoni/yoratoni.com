import React from "react";
import "./Header.css";


const Header = () => {
    return (
        <header className="site__header">
            <div className="site__headerContent">
                <hgroup className="pt-8">
                    <p className="mb-3 site__headerSub">Hi, my name is</p>
                    <h1 className="site__headerName">ADRIEN&nbsp;BIBOLLET</h1>

                    <div className="flex items-center justify-center w-full mt-2 text-center">
                        {/* Separates brackets to solve spacing symmetry issues */}
                        <p className="site__headerSub">
                            <span className="mr-3 site__headerSub">&#123;</span>
                            alias:&nbsp;&quot;Yoratoni&quot;
                            <span className="ml-[0.36rem] site__headerSub">&#125;</span>
                        </p>
                    </div>
                </hgroup>

                <div className="site__headerQuickWords">
                    I&apos;m a frontend web developer based in France!
                </div>

                <div className="site__headerHomeIntro">
                    <p>
                        With a passion for art-focused programming, my goal is to create unique and incredible projects.
                    </p>
                    <p>
                        Sometimes on my own, sometimes for someone else, in any case, I want to create the most amazing digital experiences.
                    </p>
                </div>
            </div>
        </header>
    );
};


export default Header;