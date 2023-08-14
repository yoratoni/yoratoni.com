import { useContext } from "react";
import "animate.css/animate.min.css";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import Background from "@/components/Background";
import { PageNumberContext } from "@/components/Contexts/PageNumber";
import Layout from "@/components/Layout";
import config from "@/configs/main.config";
import Home from "@/pages/Home";


export default function App() {
    const { pageNumber, setPageNumber } = useContext(PageNumberContext);

    // Scroll handlers
    const upHandler = () => pageNumber > 0 && setPageNumber(prev => prev - 1);
    const downHandler = () => (pageNumber < config.numberOfPages - 1) && setPageNumber(prev => prev + 1);

    const getCurrentPage = () => {
        switch (pageNumber) {
            case 0:
                return <Home />;
            default:
                return <Home />;
        }
    };

    return (
        <main className="relative z-0 bg-[#0B111B]">
            <ReactScrollWheelHandler
                upHandler={() => upHandler()}
                rightHandler={() => upHandler()}
                downHandler={() => downHandler()}
                leftHandler={() => downHandler()}
                disableSwipeWithMouse={true}
                disableKeyboard={true}
                preventScroll={true}
                timeout={256}
                className="outline-none"
            >
                <Background />

                <Layout>
                    {getCurrentPage()}
                </Layout>
            </ReactScrollWheelHandler>
        </main>
    );
}