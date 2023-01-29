import React from "react";
import "./Cards.css";

import { CardsData } from "helpers/dicts";


const Cards = () => {
    const [containerHeight, setContainerHeight] = React.useState(0);
    const [cardsHeight, setCardsHeight] = React.useState<number>(0);
    const [isReduced, setIsReduced] = React.useState(false);

    const containerRef = React.useRef<HTMLDivElement>(null);
    const cardsRef = React.useRef<Array<HTMLDivElement | null>>([]);

    React.useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, CardsData.length);
    }, [CardsData]);

    React.useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setContainerHeight(containerRef.current.clientHeight);
            }

            if (cardsRef.current) {
                const tempCardsHeight = cardsRef.current.map((card) => {
                    if (card) {
                        return card.clientHeight;
                    }

                    return 0;
                });

                console.log(tempCardsHeight.reduce((a, b) => a + b, 0));
                setCardsHeight(tempCardsHeight.reduce((a, b) => a + b, 0));
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    React.useEffect(() => {
        if (cardsHeight > containerHeight) {
            setIsReduced(true);
        } else {
            setIsReduced(false);
        }
    }, [containerHeight, cardsHeight]);

    return (
        <div className="cards" ref={containerRef}>
            {Array.from({ length: CardsData.length }, (_, i) =>
                <div className="cards__card" key={i} ref={el => cardsRef.current[i] = el}>
                    <div className="cards__card-title">
                        {CardsData[i].title}
                    </div>
                    <div className="cards__card-description">
                        {isReduced ? CardsData[i].description: CardsData[i].fullDescription}
                    </div>
                </div>
            )}
        </div>
    );
};


export default Cards;