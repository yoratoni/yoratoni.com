import React from "react";


export const pageNumberContext = React.createContext<IsPageNumberContext>({
    pageNumber: 0, setPageNumber: () => undefined
});