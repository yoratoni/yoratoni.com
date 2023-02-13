import React from "react";
import "pages/Pages.css";
import "./Work.css";

import Card from "components/card/Card";
import { cardNameContext } from "helpers/contexts";
import { cardsData } from "helpers/dicts";


const Work = () => {
    const [cardName, setCardName] = React.useState<string>("");

    const [cardPopupContent, setCardPopupContent] = React.useState<IsCardPopupContent>({
        title: "",
        description: "",
        techStack: [],
        links: {
            github: "",
            live: ""
        }
    });

    React.useEffect(() => {
        const cardData = cardsData.find((card) => card.title === cardName);

        if (cardData !== undefined) {
            setCardPopupContent({
                title: cardData.title,
                description: cardData.description,
                techStack: cardData.techStack,
                links: {
                    github: cardData.links.github,
                    live: cardData.links.live
                }
            });
        }

        console.log(cardPopupContent);
    }, [cardName]);

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
                    <cardNameContext.Provider value={{ cardName, setCardName }}>
                        <div
                            className="work__card-popup"
                            style={
                                (cardName === undefined || cardName === "") ?
                                    { display: "none" }:
                                    { display: "block" }
                            }
                        >

                        </div>

                        <div className="work__card-container">
                            <Card
                                title="Mdisk Project"
                                icon="Album"
                                techStack={["NodeJS", "TS"]}
                            />
                            <Card
                                title="Dumb Websites"
                                icon="Category"
                                techStack={["React", "CSS", "TS"]}
                            />
                            <Card
                                title="Parallax Effect"
                                icon="Collections"
                                techStack={["React", "CSS", "TS"]}
                            />
                            <Card
                                title="Huawei Forwarder"
                                icon="Router"
                                techStack={["Python", "Huawei API"]}
                            />
                            <Card
                                title="Coming Soon"
                                icon="Close"
                            />
                            <Card
                                title="Coming Soon"
                                icon="Close"
                            />
                        </div>
                    </cardNameContext.Provider>
                </div>
            </div>
        </div>
    );
};


export default Work;