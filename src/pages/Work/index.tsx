import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext, useEffect, useState } from "react";

import IconButton from "@/components/base/IconButton";
import { LayoutDimensionsContext } from "@/components/Contexts/LayoutDimensions";
import WorkCard from "@/components/WorkCard";
import config from "@/configs/main.config";
import { IsWorkCard } from "@/types/general";


export default function Work() {
    const { layoutHeight } = useContext(LayoutDimensionsContext);

    const [currPage, setCurrPage] = useState<number>(0);
    const [nbCards, setNbCards] = useState<number>(0);
    const [currWorkCards, setCurrWorkCards] = useState<IsWorkCard[]>([]);

    useEffect(() => {
        for (const breakpoint of config.work.breakpoints) {
            if (layoutHeight >= breakpoint.min && layoutHeight <= breakpoint.max) {
                setNbCards(breakpoint.nbCards);
            }

            console.log(nbCards);
        }
    }, [layoutHeight]);

    useEffect(() => {
        const workCards: IsWorkCard[] = [];

        for (let i = 0; i < nbCards; i++) {
            let card = config.work.cards[i];

            if (!card) {
                card = {
                    bgImage: "/assets/images/work/coming_soon.png",
                    bgBrightness: 0.5,
                    title: "",
                    description: "",
                    technologies: []
                };
            }

            workCards.push(card);
        }


        setCurrWorkCards(workCards);

    }, [nbCards]);

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full">
            <div className="relative flex flex-col items-center justify-center w-full h-0 min-h-full px-8 py-8 space-y-4">
                <IconButton
                    icon={<ExpandLessIcon className="text-5xl" />}
                    onClick={() => setCurrPage(currPage - 1)}
                />

                {currWorkCards.map((card, index) => (
                    <WorkCard
                        key={index}
                        card={card}
                    />
                ))}

                <IconButton
                    icon={<ExpandMoreIcon />}
                    onClick={() => setCurrPage(currPage + 1)}
                />
            </div>
        </div>
    );
}