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
    const [currProjects, setCurrProjects] = useState<IsWorkCard[]>([]);

    useEffect(() => {
        const nbProjects = Object.keys(config.workCards).length / maxPages;

        let workCards : IsWorkCard[] = [];

        if (pageIndex < maxPages - 1) {
            // Slice equitably the work cards for each page
            workCards = config.workCards.slice(pageIndex * nbProjects, (pageIndex + 1) * nbProjects);
        } else {
            // In the case of the last page, we take all the remaining work cards
            workCards = config.workCards.slice(pageIndex * nbProjects);
        }

        setCurrProjects(workCards);
    }, [pageIndex]);

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full max-w-6xl px-8 space-y-4 overflow-hidden text-center">
            {currProjects.map((project, index) => (
                <WorkCard
                    key={index}
                    card={project}
                />
            ))}
        </div>
    );
}