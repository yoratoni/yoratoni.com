import React from "react";
import "./BackgroundWrapper.css";

import Background from "components/background/Background";
import { PageNumberContext } from "helpers/contexts";


const BackgroundWrapper = () => {
    const { pageNumber } = React.useContext(PageNumberContext);

    const [prevPageNumber, setPrevPageNumber] = React.useState(-1);

    // Returns a direction speed factor of the parallax (-1 or 1),
    const [direction, setDirection] = React.useState<IsDirectionSpeedFactor>(1);

    // An index incrementing at every scroll to launch the animation even
    // when the scrolling is in the same direction
    const [animIndex, setAnimIndex] = React.useState(-1);


    React.useEffect(() => {
        if (prevPageNumber !== -1) {
            if (pageNumber > prevPageNumber) {
                setDirection(1);
            } else {
                setDirection(-1);
            }

            setAnimIndex(animIndex => animIndex + 1);
            setPrevPageNumber(pageNumber);
        } else {
            setPrevPageNumber(0);
        }
    }, [pageNumber]);


    return (
        <div className="background-wrapper">
            <Background direction={direction} animIndex={animIndex} />
        </div>
    );
};


export default BackgroundWrapper;