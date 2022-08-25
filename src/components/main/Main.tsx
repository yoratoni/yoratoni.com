import React from "react";
import "./Main.css";

import SectionTitle from "./sectionTitle/SectionTitle";


const Main = () => {
    return (
        <div className="rcc__squareBck main__container">
            <SectionTitle title="Work" />
            <SectionTitle title="Art" />

            <SectionTitle title="About" />
            <div className="">
                <h3>_Work_</h3>
                <p>Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop. He publishes content for marketing his products and his YouTube channel called Dev as Life has more than 100k subscribers.</p>
                <h3>_Bio_</h3>
                <p>1984Born in Osaka (大阪), Japan.
                    2010Completed the Masters Program in the Graduate School of Information Science at Nara Institute of Science and Technology (奈良先端科学技術大学院大学情報科学研究科修士課程)
                    2010Worked at Yahoo! Japan (ヤフー株式会社入社)
                    2012 to presentWorking as a freelancer</p>
                <h3>_Passions_</h3>
                <p>Art, Music, Mathematics, Dystopian Sci-Fi, Machine Learning</p>
            </div>
        </div>
    );
};


export default Main;