import React from "react";


// Components
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";


/**
 * Contains the whole website content
 */
const Content = () => {
    return (
        <div className="z-0 h-screen text-white">
            <Navbar />

            <header className="flex flex-col items-center w-full h-[4000px]">
                <Banner />
            </header>
        </div>
    );
};


export default Content;