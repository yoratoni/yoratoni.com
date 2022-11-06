import React from "react";
import "./Navbar.css";

import SelectAllIcon from "@mui/icons-material/SelectAll";
import { globalParameters } from "helpers/dicts";
import { pageNumberContext } from "helpers/contexts";


const Navbar = () => {
    const { pageNumber, setPageNumber } = React.useContext(pageNumberContext);

    const [buttonStatesArray, setButtonStatesArray] = React.useState<boolean[]>(
        Array(globalParameters.appPages).fill(false)
    );

    const getButtonIndex = (e: React.MouseEvent<HTMLButtonElement>) => {
        let tempPageNumber = pageNumber;

        if (e.currentTarget.dataset.index !== undefined) {
            tempPageNumber = Number(e.currentTarget.dataset.index);
        }

        if (tempPageNumber !== pageNumber) {
            setPageNumber(tempPageNumber);
        }
    };

    React.useEffect(() => {
        const tempButtonStatesArray = [...buttonStatesArray];

        for (let i = 0; i < globalParameters.appPages; i++) {
            let defValue = false;

            if (i === pageNumber) {
                defValue = true;
            }

            tempButtonStatesArray[i] = defValue;
        }

        setButtonStatesArray(tempButtonStatesArray);
    }, [pageNumber]);

    return (
        <nav className="navbar">
            <div className="navbar__buttons">
                {Array.from({ length: globalParameters.appPages }, (_, i) =>
                    <button
                        className={`navbar__button ${buttonStatesArray[i] ? "navbar__button-active" : ""}`}
                        onClick={getButtonIndex}
                        data-index={i}
                        key={i}
                    >
                        <div className="navbar__button-content">
                            <SelectAllIcon />
                            {globalParameters.pageNames[i]}
                        </div>
                    </button>
                )}
            </div>
        </nav>
    );
};


export default Navbar;