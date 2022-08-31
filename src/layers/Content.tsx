import React from "react";

import Navbar from "components/molecules/navbar/Navbar";
import Header from "components/molecules/header/Header";
import Footer from "components/molecules/footer/Footer";
import Contact from "components/molecules/contact/Contact";
import SocialButton from "components/atoms/socialButton/SocialButton";
import SectionContainer from "components/atoms/sectionContainer/SectionContainer";


const Content = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-start justify-center w-full max-w-3xl py-8 mx-auto mt-16 px-9">
                <Header />

                <SectionContainer sectionId="work" title="Work" />
                <SectionContainer sectionId="art" title="Art" />
                <SectionContainer sectionId="about" title="About" />
                <SectionContainer sectionId="contact" title="Contact" />

                <Footer />
            </div>
        </>
    );
};


export default Content;