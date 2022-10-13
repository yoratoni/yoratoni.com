import React from "react";
import "./Navbar.css";

import SelectAllIcon from "@mui/icons-material/SelectAll";
import { globalParameters } from "scripts/dicts";
import { pageNumberContext } from "scripts/contexts";


const Navbar = () => {
    const {pageNumber, setPageNumber} = React.useContext(pageNumberContext);

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
        <nav className="navbar">
            {Array.from({length: globalParameters.appPages}, (_, i) =>
                <button
                    className="navbar__button"
                    onClick={getButtonIndex}
                    data-index={i}
                    key={i}
                >
                    <SelectAllIcon />
                </button>
            )}
        </nav>
    );
};


export default Navbar;