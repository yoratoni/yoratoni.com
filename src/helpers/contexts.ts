import React from "react";


export const PageNumberContext = React.createContext<IsPageNumberContext>({
    pageNumber: 0, setPageNumber: () => undefined
});

export const cardNameContext = React.createContext<IsCardNameContext>({
    cardName: "", setCardName: () => undefined
});