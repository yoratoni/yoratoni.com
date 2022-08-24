import React from "react";


// Components
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Section from "../components/section/Section";


const Content = () => {
    return (
        <div className="z-0 h-screen text-white">
            <Navbar />

            <header className="flex flex-col items-center h-[calc(100vh-8rem)]">
                <Banner />
            </header>

            <main className="flex flex-col items-center">
                <Section />
                <Section />
            </main>
        </div>
    );
};


export default Content;