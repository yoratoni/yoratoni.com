import { useState } from "react";
import "@/styles/main.css";
import "animate.css/animate.min.css";
import "@/styles/fonts.css";
import "@/styles/library.css";
import "@/styles/vars.css";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import AppOverlay from "@/components/appOverlay/AppOverlay";
import BackgroundWrapper from "@/components/backgroundWrapper/BackgroundWrapper";
import { PageNumberContext } from "@/helpers/contexts";
import { globalParameters } from "@/helpers/dicts";


export default function App() {
    const [pageNumber, setPageNumber] = useState(0);

    const upHandler = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber => pageNumber - 1);
        }
    };

    const downHandler = () => {
        if (pageNumber < globalParameters.appPages - 1) {
            setPageNumber(pageNumber => pageNumber + 1);
        }
    };

    return (
        <main className="app">
            <PageNumberContext.Provider value={{ pageNumber, setPageNumber }}>
                <ReactScrollWheelHandler
                    upHandler={() => upHandler()}
                    rightHandler={() => upHandler()}
                    downHandler={() => downHandler()}
                    leftHandler={() => downHandler()}
                    disableSwipeWithMouse={true}
                    disableKeyboard={true}
                    preventScroll={true}
                    timeout={256}
                >
                    <BackgroundWrapper />
                    <AppOverlay />
                </ReactScrollWheelHandler>
            </PageNumberContext.Provider>
        </main>
    );
}