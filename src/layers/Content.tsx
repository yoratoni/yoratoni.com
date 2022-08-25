import React from "react";


// Components
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";


const Content = () => {
    return (
        <div className="z-0 flex flex-col items-center text-white">
            <Navbar />
            <Banner />
            <Main />
            <Footer />
        </div>
    );
};


export default Content;