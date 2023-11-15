import { ReactNode, useContext, useEffect, useRef } from "react";

import { LayoutDimensionsContext } from "@/components/Contexts/LayoutDimensions";
import Navbar from "@/components/Navbar";


type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    const { setLayoutWidth, setLayoutHeight } = useContext(LayoutDimensionsContext);

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setLayoutWidth(contentRef.current?.clientWidth || 0);
                setLayoutHeight(contentRef.current?.clientHeight || 0);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex flex-col w-full h-0 min-h-full overflow-hidden">
            <main ref={contentRef} className="flex items-center justify-center flex-auto w-full">
                {children}
            </main>

            <footer className="flex items-center justify-center flex-initial w-full">
                <Navbar />
            </footer>
        </div>
    );
}