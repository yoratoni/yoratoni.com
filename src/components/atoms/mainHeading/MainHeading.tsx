import React from "react";
import "./MainHeading.css";


const MainHeading = () => {
    return (
        <div className="main-heading animate__animated animate__fadeInDown">
            <hr />
            <div className="main-heading__heading-container">
                <h1 className="main-heading__heading">
                    ADRIEN BIBOLLET
                </h1>

                <div className="main-heading__flex">
                    <hr />
                    <h2 className="main-heading__subheading">
                        FULL-STACK DEVELOPER
                    </h2>
                    <hr />
                </div>
            </div>
            <hr />
        </div>
    );
};


export default MainHeading;