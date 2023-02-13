import React from "react";

import * as MuiIcons from "@mui/icons-material";


const IconComp: React.FC<IconProps> = ({ icon }) => {
    const Icon = icon && MuiIcons[icon];

    return (
        <>{Icon && <Icon />}</>
    );
};


export default IconComp;