import { useEffect, useState } from "react";

import WorkCard from "@/components/WorkCard";
import config from "@/configs/main.config";
import { IsWorkCard } from "@/types/general";


type WorkProps = {
    pageIndex: number;
};

export default function Work({
    pageIndex
}: WorkProps) {
    const [currWorkCards, setCurrWorkCards] = useState<IsWorkCard[]>([]);

    useEffect(() => {
        const workCards : IsWorkCard[] = [];

        if (pageIndex < config.work.maxPages - 1) {
            for (let i = 0; i < config.work.maxCardsPerPage; i++) {
                workCards.push(config.work.cards[pageIndex * config.work.maxCardsPerPage + i]);
            }
        } else {
            for (let i = 0; i < config.work.cards.length - (pageIndex * config.work.maxCardsPerPage); i++) {
                workCards.push(config.work.cards[pageIndex * config.work.maxCardsPerPage + i]);
            }
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