import { useContext, useEffect } from "react";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import Background from "@/components/Background";
import { PageNumberContext } from "@/components/Contexts/PageNumber";
import Layout from "@/components/Layout";
import config from "@/configs/main.config";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Work from "@/pages/Work";


export default function App() {
    const { pageNumber, setPageNumber } = useContext(PageNumberContext);
    const navigate = useNavigate();

    // Scroll handlers
    const upHandler = () => (pageNumber > 0) && setPageNumber(prev => prev - 1);
    const downHandler = () => (pageNumber < config.pageNames.length - 1) && setPageNumber(prev => prev + 1);

    useEffect(() => {
        switch (config.pageNames[pageNumber]) {
            case "home":
                navigate("/");
                break;
            case "work_0":
                navigate("/work");
                break;
            case "work_1":
                navigate("/work");
                break;
            case "about":
                navigate("/about");
                break;
            case "contact":
                navigate("/contact");
                break;
            default:
                navigate("/");
                break;
        }
    }, [pageNumber]);

    return (
        <div className="relative z-0 bg-[#0B111B]">
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
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/work/0" element={<Work index={0} />} />
                        <Route path="/work/1" element={<Work index={1} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Layout>
            </ReactScrollWheelHandler>
        </div>
    );
}