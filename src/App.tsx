import React from "react";
import "styles/main.css";

// CSS Libs
import "animate.css/animate.min.css";

// General app styles
import "styles/fonts.css";
import "styles/library.css";
import "styles/vars.css";
import "styles/main.css";

// App components
import LoadingScreen from "components/atoms/loadingScreen/LoadingScreen";
import AppParallax from "components/atoms/appParallax/AppParallax";


const App = () => {
    return (
        <main className="app">
            <div className="app__background">
                <AppParallax />
            </div>

            <div className="app__overlay">

            </div>

            {/* <LoadingScreen /> */}
        </main>
    );
};


export default App;