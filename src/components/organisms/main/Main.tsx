import React from "react";
import "./Main.css";

import PersonalProjects from "components/molecules/personalProjects/PersonalProjects";
import GetInTouch from "components/molecules/getInTouch/GetInTouch";
import AboutMe from "components/molecules/aboutMe/AboutMe";
import Work from "components/molecules/work/Work";


const Main = () => {
    return (
        <main className="main">
            <AboutMe />
            <Work />
            <PersonalProjects />
            <GetInTouch />
        </main>
    );
};


export default Main;