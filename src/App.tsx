import React from "react";
import "styles/main.css";

// CSS Libs
import "animate.css/animate.min.css";

// General app styles
import "styles/fonts.css";
import "styles/library.css";
import "styles/vars.css";
import "styles/main.css";

// App parts
import Header from "components/organisms/header/Header";
import Main from "components/organisms/main/Main";
import Footer from "components/organisms/footer/Footer";


const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};


export default App;