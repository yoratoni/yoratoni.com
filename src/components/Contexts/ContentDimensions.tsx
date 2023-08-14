import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";


type ContentDimensionsContextType = {
    contentDimensions: {
        width: number;
        height: number;
    };
    setContentDimensions: Dispatch<SetStateAction<{
        width: number;
        height: number;
    }>>;
}

export const ContentDimensionsContext = createContext<ContentDimensionsContextType>({} as ContentDimensionsContextType);

export default function ContentDimensionsProvider({ children }: { children: ReactNode }) {
    const [contentDimensions, setContentDimensions] = useState({
        width: 0,
        height: 0
    });

    return (
        <ContentDimensionsContext.Provider value={{ contentDimensions, setContentDimensions }}>
            {children}
        </ContentDimensionsContext.Provider>
    );
}