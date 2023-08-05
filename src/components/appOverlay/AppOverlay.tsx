import { useContext } from "react";

import "./AppOverlay.css";
import Navbar from "@/components/navbar/Navbar";
import { PageNumberContext } from "@/helpers/contexts";
import About from "@/pages/about/About";
import Contact from "@/pages/contact/Contact";
import Home from "@/pages/home/Home";
import Work from "@/pages/work/Work";


const AppOverlay = () => {
    const { pageNumber } = useContext(PageNumberContext);

    const getCurrentPage = () => {
        let pageComponent;

        switch (pageNumber) {
            case 0:
                pageComponent = <Home />;
                break;
            case 1:
                pageComponent = <Work />;
                break;
            case 2:
                pageComponent = <About />;
                break;
            case 3:
                pageComponent = <Contact />;
                break;
            default:
                pageComponent = <Home />;
        }

        // Trick: randomize the key to force a re-render triggering the animation
        return (
            <div
                key={Math.round(Math.random() * 1000)}
                className="app-overlay__page animate__animated animate__fadeIn"
            >
                {pageComponent}
            </div>
        );
    };

    return (
        <div className="app-overlay">
            {getCurrentPage()}

            <div className="app-overlay__bar">
                <Navbar />
            </div>
        </div>
    );
};


export default AppOverlay;