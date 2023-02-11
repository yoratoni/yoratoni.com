import React from "react";
import "styles/main.css";

// CSS Libs
import "animate.css/animate.min.css";

// General app styles
import "styles/fonts.css";
import "styles/library.css";
import "styles/vars.css";
import "styles/main.css";

// Libs
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { globalParameters } from "helpers/dicts";

// Contexts
import { pageNumberContext } from "helpers/contexts";

// App components
import BackgroundWrapper from "components/backgroundWrapper/BackgroundWrapper";
import AppOverlay from "components/appOverlay/AppOverlay";


const App = () => {
    const [pageNumber, setPageNumber] = React.useState(0);

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
            <pageNumberContext.Provider value={{ pageNumber, setPageNumber }}>
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
            </pageNumberContext.Provider>
        </main>
    );
};


export default App;