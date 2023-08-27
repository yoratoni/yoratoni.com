import Circle from "@mui/icons-material/Circle";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import { Fragment, useContext } from "react";

import { PageNumberContext } from "@/components/Contexts/PageNumber";
import config from "@/configs/main.config";


export default function Navbar() {
    const { pageNumber, setPageNumber } = useContext(PageNumberContext);

    const getButtonIndex = (e: React.MouseEvent<HTMLButtonElement>) => {
        let tempPageNumber = pageNumber;

        if (e.currentTarget.dataset.index !== undefined) {
            tempPageNumber = Number(e.currentTarget.dataset.index);
        }

        if (tempPageNumber !== pageNumber) {
            setPageNumber(tempPageNumber);
        }
    };

    /**
     * Recovers info about the pages, to support multiple hidden work pages
     * @param i The current page number.
     * @param wantedInfo The info to recover.
     * @returns The boolean info.
     */
    const getPageInfo = (
        i: number,
        wantedInfo: "ignoreOtherWorkPages" | "isWorkPage" | "doApplyButtonColor"
    ): boolean => {
        switch (wantedInfo) {
            case "ignoreOtherWorkPages":
                return (config.pageNames[i] === "work_0" || !config.pageNames[i].includes("work"));
            case "isWorkPage":
                return config.pageNames[i].includes("work");
            case "doApplyButtonColor":
                if (config.pageNames[i] === "work_0" && config.pageNames[pageNumber].includes("work")) {
                    return true;
                }

                return (i === pageNumber);
            default:
                return false;
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-start w-full h-full"
            style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.24) 36%)"
            }}
        >
            <div className="flex items-start justify-between w-full h-full max-w-md px-6 md:max-w-lg">
                {[...Array(config.pageNames.length)].map((_, i) => (
                    <Fragment key={i}>
                        {getPageInfo(i, "ignoreOtherWorkPages") && (
                            <button
                                data-index={i}
                                onClick={getButtonIndex}
                                className="flex flex-col items-center flex-1 min-w-0 text-gray-600 hover:text-gray-500"
                                style={{
                                    color: getPageInfo(i, "doApplyButtonColor") ? "#fff" : undefined
                                }}
                            >
                                <div className="text-[34px] md:text-[46px]">
                                    {getPageInfo(i, "isWorkPage") && (
                                        <Circle
                                            style={{
                                                marginRight: "0.4rem",
                                                marginBottom: "0.3rem",
                                                fontSize: "10px"
                                            }}
                                        />
                                    )}

                                    <SelectAllIcon
                                        style={{
                                            marginBottom: "0.3rem",
                                            transform: "rotate(45deg)",
                                            fontSize: "1em"
                                        }}
                                    />

                                    {getPageInfo(i, "isWorkPage") && (
                                        <Circle
                                            style={{
                                                marginLeft: "0.4rem",
                                                marginBottom: "0.3rem",
                                                fontSize: "10px"
                                            }}
                                        />
                                    )}
                                </div>
                                <p className="text-base font-medium">
                                    {getPageInfo(i, "isWorkPage") ? "work" : config.pageNames[i]}
                                </p>
                            </button>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}