import React from "react";


// Components
import Navbar from "../navbar/Navbar";


/**
 * Contains the whole website content
 */
const Content = () => {
    return (
        <div className="z-0 h-full text-white">
            <header className="w-full">
                <Navbar />
            </header>

            <main className="w-full h-full">

            </main>

            <footer className="w-full h-96">

            </footer>
        </div>
    );
};


export default Content;