import { ReactNode, useContext, useEffect, useRef } from "react";

import { ContentDimensionsContext } from "@/components/Contexts/ContentDimensions";


export default function Layout({ children }: { children: ReactNode; }) {
    const { setContentDimensions } = useContext(ContentDimensionsContext);

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setContentDimensions({
                    width: contentRef.current?.clientWidth || 0,
                    height: contentRef.current?.clientHeight || 0
                });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="absolute top-0 left-0 z-10 flex flex-col w-full h-screen max-h-screen overflow-hidden">
            <header className="flex items-center justify-center flex-initial w-full px-6 h-9">
                <h2 className="text-xl text-center">
                    Y O R A T O N I
                </h2>
            </header>

            <main ref={contentRef} className="flex items-center justify-center flex-auto w-full px-4">
                {children}
            </main>

            <footer className="flex items-center justify-center flex-initial w-full h-20 px-6">

            </footer>
        </div>
    );
}