import React from "react";
import "./Main.css";

import GetInTouch from "components/molecules/getInTouch/GetInTouch";
import AboutMe from "components/molecules/aboutMe/AboutMe";
import Work from "components/molecules/work/Work";


const Main = () => {
    return (
        <main className="main">
            <AboutMe />
            <Work />
            <GetInTouch />
        </main>
    );
};


export default Main;