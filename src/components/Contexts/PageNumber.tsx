import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";


type PageNumberContextType = {
    pageNumber: number;
    setPageNumber: Dispatch<SetStateAction<number>>;
}

export const PageNumberContext = createContext<PageNumberContextType>({} as PageNumberContextType);

export default function PageNumberProvider({ children }: { children: ReactNode }) {
    const [pageNumber, setPageNumber] = useState(0);

    return (
        <PageNumberContext.Provider value={{ pageNumber, setPageNumber }}>
            {children}
        </PageNumberContext.Provider>
    );
}