import React from "react";
import "./Banner.css";


const Banner = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-start w-full h-auto">
                <h1 className="leading-tight banner__name">ADRIEN BIBOLLET</h1>
                <p className="text-base font-normal tracking-widest">
                    Aka. Yoratoni
                </p>

                <div className="w-auto max-w-xl rcc__section rcc__squareBck banner__quickWords">
                    <div className="banner__justMe"></div>

                    <p>For over a decade, I have studied and inscribed the sacred runes
                        and performed the arcane rituals that breathe life into the realm of the internet.
                    </p>

                    <p>The web can sometimes be indistinguishable from magic,
                        but I have the knowledge and patience required to make just about anything.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Banner;