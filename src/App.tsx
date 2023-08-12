import { useContext } from "react";
import "animate.css/animate.min.css";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import Background from "@/components/Background";
import { PageNumberContext } from "@/components/Contexts/PageNumber";
import Layout from "@/components/Layout";
import config from "@/configs/main.config";


export default function App() {
    const { pageNumber, setPageNumber } = useContext(PageNumberContext);

    const upHandler = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber => pageNumber - 1);
        }
    };

    const downHandler = () => {
        if (pageNumber < config.numberOfPages - 1) {
            setPageNumber(pageNumber => pageNumber + 1);
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
            >
                <Background />

                <Layout>
                    <h1 className="text-6xl font-bold text-center">
                        YORATONI
                    </h1>
                    <p>
                        _website under construction_
                    </p>
                </Layout>
            </ReactScrollWheelHandler>
        </main>
    );
}