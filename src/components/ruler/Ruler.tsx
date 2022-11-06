import React from "react";
import "./Ruler.css";


interface RulerProps {
    isVertical: boolean;
    size: string;
}


const Ruler = ({
    isVertical,
    size
}: RulerProps) => {
    return (
        <div
            className={isVertical ? "ruler__v" : "ruler__h" }
            style={{ [isVertical ? "height" : "width"]: size }}
        >
        </div>
    );
};


export default Ruler;