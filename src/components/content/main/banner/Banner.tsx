import React from "react";
import "./Banner.css";


const Banner = () => {
    return (
        <div className="banner__container">
            <div className="banner_contentContainer">
                <hgroup className="py-8">
                    <p className="mb-3 banner__sub">Hi, my name is</p>
                    <h1 className="banner__name">ADRIEN&nbsp;BIBOLLET</h1>

                    <div className="flex items-center justify-center w-full mt-2 mb-6 text-center">
                        {/* Separates brackets to solve spacing symmetry issues */}
                        <p className="banner__sub">
                            <span className="mr-2 banner__sub">&#123;</span>
                            alias:&nbsp;&quot;Yoratoni&quot;
                            <span className="ml-[0.2rem] banner__sub">&#125;</span>
                        </p>
                    </div>
                </hgroup>

                <div className="banner__homeIntro">
                    <p>For over a decade, I have studied and inscribed the sacred runes and performed the arcane rituals that breathe life into the realm of the internet.</p>
                    <p>The web can sometimes be indistinguishable from magic, but I have the knowledge and patience required to make just about anything.</p>
                </div>
            </div>
        </div>
    );
};


export default Banner;