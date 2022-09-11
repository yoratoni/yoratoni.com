import React from "react";
import "./Content.css";

import Navbar from "components/organisms/navbar/Navbar";
import Header from "components/organisms/header/Header";
import Projects from "components/organisms/projects/Projects";
import About from "components/organisms/about/About";
import Contact from "components/organisms/contact/Contact";
import Footer from "components/organisms/footer/Footer";


const Content = () => {
    return (
        <>
            <div className=" h-[200vh]"></div>

            {/* <Navbar />

            <div className="content">
                <Header />
                <Projects />
                <About />
                <Contact />
            </div>

            <Footer /> */}
        </>
    );
};


export default Content;