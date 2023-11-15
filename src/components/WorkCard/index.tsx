import { useRef } from "react";

import config from "@/configs/main.config";
import { IsWorkCard } from "@/types/general";


type WorkCardProps = {
    card: IsWorkCard;
};

export default function WorkCard({
    card
}: WorkCardProps) {

    const contentRef = useRef<HTMLAnchorElement>(null);


    return (
        <a
            ref={contentRef}
            href={card.link}
            target="_blank"
            rel="noreferrer"
            className={`
                w-full max-w-[650px] rounded-lg relative flex shadow-io overflow-hidden
                transition-colors duration-150 h-full
                ${card.title.length !== 0 && "cursor-pointer hover:bg-gray-200 hover:bg-opacity-5"}
            `}
        >
            <div
                className="absolute w-full h-full rounded-lg"
                style={{
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    filter: `brightness(${card.bgBrightness})`,
                    zIndex: -1
                }}
            />

            {card.image && (
                <div className="relative h-full rounded-l-lg shadow-black shadow-io aspect-square">
                    <img
                        className={`
                            absolute top-0 left-0 w-full h-full object-contain rounded-l-lg
                            ${!card.image && "opacity-30"}
                        `}
                        src={card.image}
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            border: "none"
                        }}
                    />
                </div>
            )}

            <div className={`relative flex-col items-start justify-center w-full text-left py-6 px-5 ${card.title.length === 0 ? "text-transparent" : "text-shadow-p"}`}>
                <h5
                    className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-2xl font-normal text-white text-shadow-p"
                    style={{
                        display: card.title.length === 0 ? "flex" : "none"
                    }}
                >
                    Coming Soon..
                </h5>

                <h5 className="pb-3 text-3xl font-normal max-sm:pb-2 max-sm:text-xl text-shadow-inherit">
                    {card.title.length > 0 ? card.title : config.work.cards[0].title}
                </h5>

                <p className="pb-4 text-sm font-normal max-sm:pb-3 max-sm:text-xs text-shadow-inherit">
                    {card.description.length > 0 ? card.description : config.work.cards[0].description}
                </p>

                <p className="text-xs text-shadow-inherit max-xsm:hidden">
                    {card.technologies.length > 0 ? (
                        card.technologies.map((tech, index) => (
                            <span key={index} className="inline-block text-shadow-inherit">
                                <span className="font-medium text-shadow-inherit">{tech}</span>

                                {index < card.technologies.length - 1 && (
                                    <span className="mx-2 font-medium text-shadow-inherit">•</span>
                                )}
                            </span>
                        ))
                    ) : (
                        config.work.cards[0].technologies.map((tech, index) => (
                            <span key={index} className="inline-block text-shadow-inherit">
                                <span className="text-shadow-inherit">{tech}</span>

                                {index < config.work.cards[0].technologies.length - 1 && (
                                    <span className="mx-2 text-shadow-inherit">•</span>
                                )}
                            </span>
                        ))
                    )}
                </p>
            </div>
        </a>
    );
}