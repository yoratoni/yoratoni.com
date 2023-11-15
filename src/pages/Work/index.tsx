import { useContext, useEffect, useState } from "react";

import { LayoutDimensionsContext } from "@/components/Contexts/LayoutDimensions";
import WorkCard from "@/components/WorkCard";
import config from "@/configs/main.config";
import { IsWorkCard } from "@/types/general";


type WorkProps = {
    pageIndex: number;
};

export default function Work({
    pageIndex
}: WorkProps) {
    const { layoutHeight } = useContext(LayoutDimensionsContext);

    const [nbCards, setNbCards] = useState<number>(0);
    const [currWorkCards, setCurrWorkCards] = useState<IsWorkCard[]>([]);

    useEffect(() => {
        for (const breakpoint of config.work.heightBreakpoints) {
            if (layoutHeight >= breakpoint.min && layoutHeight <= breakpoint.max) {
                setNbCards(breakpoint.nbCards);
            }
        }
    }, [layoutHeight]);

    useEffect(() => {
        const workCards: IsWorkCard[] = [];
        const lastWorkCardIndex = ((pageIndex + 1) * nbCards) - 1;

        if (lastWorkCardIndex < config.work.cards.length) {
            // Enough cards to fill the page
            for (let i = lastWorkCardIndex - nbCards + 1; i <= lastWorkCardIndex; i++) {
                workCards.push(config.work.cards[i]);
            }
        } else {
            // Not enough cards to fill the page, fill with the last cards
            for (let i = lastWorkCardIndex - nbCards + 1; i < config.work.cards.length; i++) {
                workCards.push(config.work.cards[i]);
            }
        }

        // if missing cards, fill with "coming soon" cards
        while (workCards.length < nbCards) {
            workCards.push({
                bgImage: "/assets/images/work/coming_soon.png",
                bgBrightness: 0.5,
                title: "",
                description: "",
                technologies: []
            });
        }

        setCurrWorkCards(workCards);

    }, [pageIndex, nbCards]);

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full max-w-6xl px-8 space-y-4 overflow-hidden text-center">
            {currWorkCards.map((card, index) => (
                <WorkCard
                    key={index}
                    card={card}
                />
            ))}
        </div>
    );
}