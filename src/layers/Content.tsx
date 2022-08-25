import React from "react";


// Components
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Section from "../components/section/Section";
import Footer from "../components/footer/Footer";


const Content = () => {
    return (
        <div className="z-0 flex flex-col items-center text-white">
            <Navbar />
            <Banner />

            <main className="flex flex-col items-center w-full">
                <Section title="My Work">
                    <p>JUIF</p>
                </Section>

                <Section title="About Me">
                    <></>
                </Section>

                <Section title="Contact">
                    <p>JUIF</p>
                </Section>
            </main>

            <Footer />
        </div>
    );
};


export default Content;