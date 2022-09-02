import React from "react";

import Navbar from "components/organisms/navbar/Navbar";
import Header from "components/organisms/header/Header";
import About from "components/organisms/about/About";
import Work from "components/organisms/work/Work";
import Experience from "components/organisms/experience/Experience";
import Footer from "components/organisms/footer/Footer";


const Content = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-start justify-center w-full max-w-3xl px-5 py-8 mx-auto mt-16">
                <Header />

                <About />
                <Work />
                <Experience />
            </div>

            <Footer />
        </>
    );
};


export default Content;