import React from "react";
import "./Content.css";

import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Footer from "./footer/Footer";


const Content = () => {
    return (
        <>
            <Navbar />

            <div className="site__container">
                <Header />


                <Footer />
            </div>
        </>
    );
};


export default Content;