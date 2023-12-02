import { useRef } from "react";
import { useWebPSupportCheck } from "react-use-webp-support-check";

import MediaSkeleton from "@/components/base/MediaSkeleton";
import config from "@/configs/main.config";
import useProgressiveImage from "@/hooks/useProgressiveImage";
import { IsWorkCard } from "@/types/general";


type WorkCardProps = {
    card: IsWorkCard;
};

export default function WorkCard({
    card
}: WorkCardProps) {
    const supportsWebP = useWebPSupportCheck();
    const contentRef = useRef<HTMLAnchorElement>(null);
    const bgImage = useProgressiveImage(supportsWebP ? card.bgImage.webp : card.bgImage.jpg);
    const image = useProgressiveImage(supportsWebP ? card.image?.webp : card.image?.jpg);

    return (
        <a
            ref={contentRef}
            href={card.link}
            target="_blank"
            rel="noreferrer"
            className={`
                w-full max-w-[650px] rounded-lg relative flex shadow-io overflow-hidden max-h-[180px] min-h-[150px]
                transition-colors duration-150 h-full
                ${card.title.length !== 0 && "cursor-pointer hover:bg-gray-200 hover:bg-opacity-5"}
            `}
        >
            <div
                className="absolute w-full h-full rounded-lg"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    filter: `brightness(${card.bgBrightness})`,
                    zIndex: -1
                }}
            >
                <MediaSkeleton
                    type="image"
                    isVisible={bgImage === null}
                    fillParent
                    showIcon={false}
                />
            </div>

            {card.image && (
                <div className="relative h-full rounded-l-lg shadow-black shadow-io aspect-square max-xsm:hidden">
                    <img
                        className={`
                            absolute top-0 left-0 w-full h-full object-contain rounded-l-lg
                            ${!card.image && "opacity-30"}
                        `}
                        src={supportsWebP ? card.image.webp : card.image.jpg}
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            border: "none"
                        }}
                    />

                    <MediaSkeleton
                        type="image"
                        isVisible={image === null}
                        fillParent
                    />
                </div>
            )}

            <div className={`relative flex flex-col items-start justify-between w-full h-full text-left py-6 px-5 ${card.title.length === 0 ? "text-transparent" : "text-shadow-p"}`}>
                <h5
                    className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-2xl font-normal text-white text-shadow-p"
                    style={{
                        display: card.title.length === 0 ? "flex" : "none"
                    }}
                >
                    Coming Soon..
                </h5>

                <h5 className="text-3xl font-normal max-sm:text-xl text-shadow-inherit">
                    {card.title.length > 0 ? card.title : config.work.cards[0].title}
                </h5>

                <p className="text-sm font-normal max-sm:text-xs text-shadow-inherit">
                    {card.description.length > 0 ? card.description : config.work.cards[0].description}
                </p>

                <p className="text-xs text-shadow-inherit">
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