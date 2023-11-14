import { useEffect, useState } from "react";

import WorkCard from "@/components/WorkCard";
import config from "@/configs/main.config";
import { IsWorkCard } from "@/types/general";


type WorkProps = {
    pageIndex: number;
    maxPages: number;
};

export default function Work({
    pageIndex,
    maxPages
}: WorkProps) {
    const [currWorkCards, setCurrWorkCards] = useState<IsWorkCard[]>([]);

    useEffect(() => {
        const nbCards = Object.keys(config.workCards).length / maxPages;

        let workCards : IsWorkCard[] = [];

        if (pageIndex < maxPages - 1) {
            // Slice equitably the work cards for each page
            workCards = config.workCards.slice(pageIndex * nbCards, (pageIndex + 1) * nbCards);
        } else {
            // In the case of the last page, we take all the remaining work cards
            workCards = config.workCards.slice(pageIndex * nbCards);
        }

        setCurrWorkCards(workCards);
    }, [pageIndex]);

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