import React from "react";

import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Footer from "./footer/Footer";


const Content = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mt-16">
                <Header />
            </div>

            <Footer />
        </>
    );
};


export default Content;