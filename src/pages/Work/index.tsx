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
    const [maxPage, setMaxPage] = useState<number>(0);
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
        setMaxPage(Math.ceil(config.work.cards.length / nbCards) - 1);

        const firstCardIndex = currPage * nbCards;
        const workCards: IsWorkCard[] = [];

        console.log(firstCardIndex, nbCards);

        for (let i = firstCardIndex; i < firstCardIndex + nbCards; i++) {
            let card: IsWorkCard = config.work.cards[i];

            if (!card) {
                card = {
                    bgImage: {
                        png: "/assets/images/work/coming_soon.png",
                        webp: "/assets/images/work/coming_soon.webp"
                    },
                    bgBrightness: 0.5,
                    title: "",
                    description: "",
                    technologies: []
                };
            }

            workCards.push(card);
        }

        setCurrWorkCards(workCards);
    }, [nbCards, currPage]);

    const handleOnButtonClick = (mode: "up" | "down") => {
        let tmpCurrPage = currPage;

        switch (mode) {
            case "up":
                if (currPage > 0) {
                    tmpCurrPage = currPage - 1;
                }
                break;
            case "down":
                if (currPage < maxPage) {
                    tmpCurrPage = currPage + 1;
                }
                break;
        }

        setCurrPage(tmpCurrPage);
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full">
            <div className="relative flex flex-col items-center justify-center w-full h-0 min-h-full px-8 py-8 space-y-4">
                <IconButton
                    icon={<ExpandLessIcon className="text-5xl" />}
                    isDisabled={currPage === 0}
                    onClick={() => handleOnButtonClick("up")}
                />

                {currWorkCards.map((card, index) => (
                    <WorkCard
                        key={index}
                        card={card}
                    />
                ))}

                <IconButton
                    icon={<ExpandMoreIcon />}
                    isDisabled={currPage === maxPage}
                    onClick={() => handleOnButtonClick("down")}
                />
            </div>
        </div>
    );
}