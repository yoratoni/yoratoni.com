import { useState } from "react";

import config from "@/configs/main.config";
import { IsWorkCard } from "@/types/general";


type WorkCardProps = {
    card: IsWorkCard;
};

export default function WorkCard({
    card
}: WorkCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            className={`
                w-full max-w-[650px] rounded-lg relative flex shadow-io overflow-hidden
                transition-colors duration-150
                ${card.title.length !== 0 && "cursor-pointer hover:bg-gray-200 hover:bg-opacity-5"}
            `}
            href={card.link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
                <div className="relative h-full rounded-l-lg shadow-black shadow-io max-sm:hidden aspect-square">
                    <img
                        className={`
                            absolute top-0 left-0 w-full h-full object-contain rounded-l-lg
                            ${!card.image && "opacity-30"}
                        `}
                        src={card.image}
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            border: "none"
                        }}
                    />
                </div>
            )}

            {card.title.length > 0 && (
                <div className="flex-col items-start justify-center w-full px-8 text-left py-7">
                    <h5 className="pb-4 text-3xl font-normal">
                        {card.title}
                    </h5>

                    <p className="pb-4 text-sm font-normal max-w-[400px]">
                        {card.description}
                    </p>

                    <p className="text-xs font-medium">
                        {card.technologies.map((tech, index) => (
                            <span key={index} className="inline-block">
                                <span>{tech}</span>

                                {index < card.technologies.length - 1 && (
                                    <span className="mx-2">•</span>
                                )}
                            </span>
                        ))}
                    </p>
                </div>
            )}

            {card.title.length === 0 && (
                <div className="relative flex-col items-start justify-center w-full px-8 text-left text-transparent py-7">
                    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                        <span className="text-2xl text-white">
                            Coming soon...
                        </span>
                    </div>

                    <h5 className="pb-4 text-3xl font-normal text-shadow-none">
                        {config.work.cards[0].title}
                    </h5>

                    <p className="pb-4 text-sm font-normal max-w-[400px] text-shadow-none">
                        {config.work.cards[0].description}
                    </p>

                    <p className="text-xs font-medium">
                        {config.work.cards[0].technologies.map((tech, index) => (
                            <span key={index} className="inline-block">
                                <span className="text-shadow-none">{tech}</span>

                                {index < config.work.cards[0].technologies.length - 1 && (
                                    <span className="mx-2 text-shadow-none">•</span>
                                )}
                            </span>
                        ))}
                    </p>
                </div>
            )}
        </a>
    );
}