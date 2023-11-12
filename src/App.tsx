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
    const downHandler = () => (pageNumber < config.pagesNames.length - 1) && setPageNumber(prev => prev + 1);

    useEffect(() => {
        switch (config.pagesNames[pageNumber]) {
            case "home":
                navigate("/");
                break;
            case "work_0":
                navigate("/work/0");
                break;
            case "work_1":
                navigate("/work/1");
                break;
            case "work_2":
                navigate("/work/2");
                break;
            case "about_0":
                navigate("/about/0");
                break;
            case "about_1":
                navigate("/about/1");
                break;
            case "about_2":
                navigate("/about/2");
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
                        <Route path="/work/0" element={<Work pageIndex={0} maxPages={3} />} />
                        <Route path="/work/1" element={<Work pageIndex={1} maxPages={3} />} />
                        <Route path="/work/2" element={<Work pageIndex={2} maxPages={3} />} />
                        <Route path="/about/0" element={<About pageIndex={0} />} />
                        <Route path="/about/1" element={<About pageIndex={1} />} />
                        <Route path="/about/2" element={<About pageIndex={2} />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Layout>
            </ReactScrollWheelHandler>
        </div>
    );
}