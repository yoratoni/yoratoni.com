import React from "react";
import "pages/Pages.css";
import "./Work.css";

import Card from "components/card/Card";
import { cardNameContext } from "helpers/contexts";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconComp from "components/iconComp/IconComp";
import { cardsData } from "helpers/dicts";


const Work = () => {
    const [cardName, setCardName] = React.useState<string>("");

    const cardRef = React.useRef<HTMLDivElement>(null);

    const [isCardOpen, setIsCardOpen] = React.useState<boolean>(false);
    const [cardContent, setCardContent] = React.useState<IsCardContent>({
        title: "",
        description: "",
        techStack: [],
        icon: "",
        links: {
            github: "",
            live: ""
        }
    });

    React.useEffect(() => {
        const checkIfClickedOutside = (e: MouseEvent) => {
            if (isCardOpen && cardRef.current !== null && !cardRef.current.contains(e.target as Node)) {
                closeCardPopup();
            }
        };

        document.addEventListener("click", checkIfClickedOutside);

        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
        };
    }, [isCardOpen]);

    React.useEffect(() => {
        const cardData = cardsData.find((card) => card.title === cardName);

        if (cardData !== undefined) {
            setCardContent({
                title: cardData.title,
                description: cardData.description,
                techStack: cardData.techStack,
                icon: cardData.icon,
                links: {
                    github: cardData.links.github,
                    live: cardData.links.live
                }
            });
        }

        if (cardName !== "") {
            setIsCardOpen(true);
        } else {
            setIsCardOpen(false);
        }
    }, [cardName]);

    const closeCardPopup = () => {
        setCardName("");
        setIsCardOpen(false);
    };

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
                            ref={cardRef}
                            className={`work__card-popup ${
                                (cardName === undefined || cardName === "") ?
                                    "work__card-hidden":
                                    "work__card-visible"
                            }`}
                        >
                            <div className="work__card-popup-header">
                                <div className="work__card-popup-header-left">
                                    <div className="work__card-popup-icon">
                                        <IconComp icon={cardContent.icon as IconProps["icon"]}/>
                                    </div>

                                    <h1 className="work__card-popup-title">
                                        {cardContent.title}
                                    </h1>
                                </div>

                                <button
                                    className="work__card-popup-close"
                                    onClick={closeCardPopup}
                                >
                                    <CloseIcon/>
                                </button>
                            </div>

                            <div className="work__card-popup-content">
                                <div></div>

                                <div className="work__card-popup-description">
                                    &gt; {cardContent.description}
                                </div>

                                <div className="work__card-popup-footer">
                                    <a
                                        className={`work__card-popup-button ${
                                            (cardContent.links.live === "" ? "work__card-popup-button-disabled" : "")
                                        }`}
                                        href={cardContent.links.live}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <OpenInNewIcon/>
                                    </a>

                                    <div className="work__card-popup-tech-stack">
                                        {cardContent.techStack.map((tech, index) => (
                                            <div key={index}>
                                                {tech}

                                                {index !== cardContent.techStack.length - 1 && (
                                                    <span>&nbsp;|&nbsp;</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        className="work__card-popup-button"
                                        href={cardContent.links.github}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <GitHubIcon/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`work__card-container ${
                                (cardName === undefined || cardName === "") ?
                                    "work__card-visible":
                                    "work__card-hidden"
                            }`}
                        >
                            {
                                cardsData.map((card) => (
                                    <Card
                                        title={card.title}
                                        icon={card.icon}
                                        techStack={card.techStack}
                                        key={card.title}
                                    />
                                ))
                            }
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