import { Fragment, useContext } from "react";

import NavButton from "@/components/base/Button/NavButton";
import { PageNumberContext } from "@/components/Contexts/PageNumber";
import config from "@/configs/main.config";


export default function Navbar() {
    const { pageNumber, setPageNumber } = useContext(PageNumberContext);

    /**
     * Recovers info about the pages, to support multiple hidden about pages
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
                    config.pagesNames[i].includes("_") &&
                    config.pagesNames[i].split("_")[1] === "0"
                ) ||
                    !config.pagesNames[i].includes("_");

            // If the page is a multi-page, return the page name.
            case "isMultiPage":
                if (config.pagesNames[i].includes("about")) return "about";

                return false;

            // In case of multi-pages, checks that one of the pages is the current page.
            // If not, return i === pageNumber for normal pages.
            case "getButtonState":
                if (config.pagesNames[i] === "about_0" && config.pagesNames[pageNumber].includes("about")) return true;

                return (i === pageNumber);

            // If the wanted info is not found, return false.
            default:
                return false;
        }
    };


    /**
     * Sets the current page number depending on if the page is a multi-page or not.
     * @param e The HTMLDivElement click event.
     * @param variant The variant of the icon clicked (-1: left, 0: center, 1: right).
     * @param index The index of the icon clicked.
     */
    const setCurrentPage = (e: React.MouseEvent<HTMLDivElement>, variant: number, index: number) => {
        let tempPageNumber = pageNumber;

        if (e.currentTarget.dataset.index !== undefined) {
            tempPageNumber = Number(e.currentTarget.dataset.index);
        }

        if (getPageInfo(index, "isMultiPage") !== false) {
            switch (variant) {
                case -1:
                    // Left icon stays on the same page
                    break;
                case 0:
                    // Center icon
                    tempPageNumber += 1;
                    break;
                case 1:
                    // Right icon
                    tempPageNumber += 2;
                    break;
            }
        }

        setPageNumber(tempPageNumber);
    };

    return (
        <div
            className="flex flex-col items-center justify-start w-full h-full py-4 max-sm:pt-1 max-sm:pb-3"
            style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.24) 36%)"
            }}
        >
            <div className="flex items-start justify-between w-full h-full max-w-md px-6 max-sm:px-1 md:max-w-lg">
                {[...Array(config.pagesNames.length)].map((_, i) => (
                    <Fragment key={i}>
                        {getPageInfo(i, "showButton") && (
                            <NavButton
                                name={(getPageInfo(i, "isMultiPage") as string) || config.pagesNames[i]}
                                pageName={config.pagesNames[pageNumber]}
                                index={i}
                                onClick={(event: React.MouseEvent<HTMLDivElement>, variant: number) => setCurrentPage(event, variant, i)}
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