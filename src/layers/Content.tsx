import React from "react";

import Navbar from "components/organisms/navbar/Navbar";
import Header from "components/organisms/header/Header";

import Work from "components/organisms/work/Work";
import Art from "components/organisms/art/Art";
import About from "components/organisms/about/About";
import Footer from "components/organisms/footer/Footer";


const Content = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-start justify-center w-full max-w-3xl px-5 py-8 mx-auto mt-16">
                <Header />

                <Work />
                <Art />
                <About />
            </div>

            <Footer />
        </>
    );
};


export default Content;