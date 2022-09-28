import React from "react";
import "./Separator.css";


const Separator = ({
    heading = null,
    subheading = null
}: IsSeparator) => {
    return (
        <div className="separator">
            <div className="separator__flex">
                <hr />

                {
                    heading !== null &&
                    <p className="separator__heading">
                        {heading}
                    </p>
                }

                <hr />
            </div>

            <div className="separator__flex">
                <hr />

                {
                    subheading !== null &&
                    <p className="separator__subheading">
                        {subheading}
                    </p>
                }

                <hr />
            </div>
        </div>
    );
};


export default Separator;