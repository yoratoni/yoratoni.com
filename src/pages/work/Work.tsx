import React from "react";
import "pages/Pages.css";
import "./Work.css";

import Card from "components/card/Card";
import Mdisk from "assets/projects/Mdisk.png";
import Router from "assets/projects/Router.png";
import Parallax from "assets/projects/Parallax.png";
import Soon from "assets/projects/Soon.png";


const Work = () => {
    return (
        <div className="pages__container">
            <header className="pages__header">
                <h3 className="pages__header-subtitle">
                    Here&apos;s some of my
                </h3>
                <h1 className="pages__header-title">
                    PROJECTS
                </h1>
                <h3 className="pages__header-subtitle">
                    &gt; The most interesting ones &lt;
                </h3>
            </header>

            <div className="pages__content-container">
                <div className="pages__content">
                    <div className="work__card-container">
                        <Card
                            title="Mdisk"
                            description="Lorem ipsum"
                            logo={Mdisk}
                            cardColor="#4D8673"
                        />
                        <Card
                            title="Huawei SMS Forwarder"
                            description="Lorem ipsum"
                            logo={Router}
                            cardColor="#4D8673"
                        />
                        <Card
                            title="The Parallax"
                            description="Lorem ipsum"
                            logo={Parallax}
                            cardColor="#4D8673"
                        />
                        <Card
                            title="SOON"
                            description="Lorem ipsum"
                            logo={Soon}
                            cardColor="#4D8673"
                        />
                        <Card
                            title="SOON"
                            description="Lorem ipsum"
                            logo={Soon}
                            cardColor="#4D8673"
                        />
                        <Card
                            title="SOON"
                            description="Lorem ipsum"
                            logo={Soon}
                            cardColor="#4D8673"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Work;