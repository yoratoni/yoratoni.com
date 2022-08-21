import React from "react";
import "./Content.css";


// Components
import Navbar from "../../navbar/Navbar";
import Social from "../../social/Social";


/**
 * Contains the whole website content
 */
const Content = () => {
    return (
        <div className="content">
            <header>
                <Navbar />
            </header>

            <main>

            </main>

            <footer>

            </footer>

            {/* <Social /> */}
        </div>
    );
};


export default Content;