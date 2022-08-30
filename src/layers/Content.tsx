import React from "react";

import Navbar from "components/molecules/navbar/Navbar";
import Header from "components/molecules/header/Header";
import Footer from "components/molecules/footer/Footer";
import Contact from "components/molecules/contact/Contact";
import SocialButton from "components/atoms/socialButton/SocialButton";


const Content = () => {
    return (
        <>
            {/* <Navbar /> */}

            <Footer />

            {/* <div className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mt-16">
                <Header />
                <Contact />
                <Footer />
            </div> */}
        </>
    );
};


export default Content;