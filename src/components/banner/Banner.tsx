import React from "react";
import "./Banner.css";


const Banner = () => {
    return (
        <header className="banner__container">
            <h1 className="banner__name">ADRIEN BIBOLLET</h1>

            <p className="my-8 text-lg font-light tracking-wide">
                &#123; <br></br>
                &nbsp; alias: &#34;Yoratoni&#34;, <br></br>
                &nbsp; work: &#34;Frontend&#34;, <br></br>
                &#125;
            </p>

            <div className="rcc__banner rcc__squareBck banner__sectionContent">
                <div className="banner__justMe"></div>

                <p>
                    Hey, I&apos;m a freelance frontend developer based in France
                    with a passion for what we call:
                </p>

                <p className="banner__theArtOfCode">
                    &#34;The Art of Code&#34;
                </p>

                <p>
                    Using computers to create beautiful and unique designs is my primary goal.
                </p>
            </div>
        </header>
    );
};


export default Banner;