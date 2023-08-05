import { createContext } from "react";


export const PageNumberContext = createContext<IsPageNumberContext>({
    pageNumber: 0,
    setPageNumber: () => undefined
});

export const cardNameContext = createContext<IsCardNameContext>({
    cardName: "",
    setCardName: () => undefined
});