import { Fragment, useContext } from "react";

import NavButton from "@/components/base/Button/NavButton";
import { PageNumberContext } from "@/components/Contexts/PageNumber";
import config from "@/configs/main.config";


export default function Navbar() {
    const { pageNumber, setPageNumber } = useContext(PageNumberContext);

    const setCurrentPage = (e: React.MouseEvent<HTMLButtonElement>) => {
        let tempPageNumber = pageNumber;

        if (e.currentTarget.dataset.index !== undefined) {
            tempPageNumber = Number(e.currentTarget.dataset.index);
        }

        if (tempPageNumber !== pageNumber) {
            setPageNumber(tempPageNumber);
        }
    };

    /**
     * Recovers info about the pages, to support multiple hidden work/about pages
     * @param i The current page number.
     * @param wantedInfo The info to recover.
     * @returns The boolean info.
     */
    const getPageInfo = (
        i: number,
        wantedInfo: "showButton" | "isMultiPage" | "getButtonState"
    ): boolean | string => {
        switch (wantedInfo) {
            // Allow to remove multi-pages from the navbar (only the first page is shown)
            case "showButton":
                return (
                    config.pageNames[i].includes("_") &&
                    config.pageNames[i].split("_")[1] === "0"
                ) ||
                    !config.pageNames[i].includes("_");

            // If the page is a multi-page, return the page name.
            case "isMultiPage":
                if (config.pageNames[i].includes("work")) return "work";
                if (config.pageNames[i].includes("about")) return "about";

                return false;

            // In case of multi-pages, checks that one of the pages is the current page.
            // If not, return i === pageNumber for normal pages.
            case "getButtonState":
                if (config.pageNames[i] === "work_0" && config.pageNames[pageNumber].includes("work")) return true;
                if (config.pageNames[i] === "about_0" && config.pageNames[pageNumber].includes("about")) return true;

                return (i === pageNumber);

            // If the wanted info is not found, return false.
            default:
                return false;
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-start w-full h-full py-4 max-sm:pt-1 max-sm:pb-3"
            style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.24) 36%)"
            }}
        >
            <div className="flex items-start justify-between w-full h-full max-w-md px-6 max-sm:px-1 md:max-w-lg">
                {[...Array(config.pageNames.length)].map((_, i) => (
                    <Fragment key={i}>
                        {getPageInfo(i, "showButton") && (
                            <NavButton
                                name={(getPageInfo(i, "isMultiPage") as string) || config.pageNames[i]}
                                pageName={config.pageNames[pageNumber]}
                                index={i}
                                onClick={setCurrentPage}
                                isMultiPage={getPageInfo(i, "isMultiPage") !== false}
                                activated={(getPageInfo(i, "getButtonState") as boolean)}
                            />
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}