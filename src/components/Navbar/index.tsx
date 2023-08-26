import SelectAllIcon from "@mui/icons-material/SelectAll";
import { useContext } from "react";

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

    return (
        <div
            className="flex flex-col items-center justify-start w-full h-full"
            style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.24) 36%)"
            }}
        >
            <div className="flex items-start justify-between w-full h-full max-w-md px-6 md:max-w-lg">
                {[...Array(config.numberOfPages)].map((_, i) => (
                    <button
                        key={i}
                        data-index={i}
                        onClick={getButtonIndex}
                        className="flex flex-col min-w-0 flex-1 items-center text-[34px] md:text-[46px] text-gray-600 navbar-button hover:text-gray-500"
                        style={{
                            color: (i === pageNumber) ? "#fff" : undefined
                        }}
                    >
                        <SelectAllIcon />
                        <p className="text-base">
                            {config.pageNames[i]}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}