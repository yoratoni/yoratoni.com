import React from "react";


// Components
import Navbar from "../../navbar/Navbar";
import Social from "../../social/Social";


/**
 * Contains the whole website content
 */
const Content = () => {
    return (
        <div className="content tw-w-full tw-h-full tw-z-0">
            <header className="tw-overflow-hidden tw-w-full tw-h-24">
                <Navbar />
            </header>

            <main className="tw-w-full tw-h-[calc(100%-96px)]">

            </main>

            <footer className="tw-w-full tw-h-0">

            </footer>

            <Social />
        </div>
    );
};


export default Content;