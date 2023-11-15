import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";


type LayoutDimensionsContextType = {
    layoutWidth: number;
    layoutHeight: number;
    setLayoutWidth: Dispatch<SetStateAction<number>>;
    setLayoutHeight: Dispatch<SetStateAction<number>>;
};

export const LayoutDimensionsContext = createContext<LayoutDimensionsContextType>({} as LayoutDimensionsContextType);

export default function LayoutDimensionsProvider({ children }: { children: ReactNode; }) {
    const [layoutWidth, setLayoutWidth] = useState(0);
    const [layoutHeight, setLayoutHeight] = useState(0);

    return (
        <LayoutDimensionsContext.Provider
            value={{
                layoutWidth,
                layoutHeight,
                setLayoutWidth,
                setLayoutHeight
            }}
        >
            {children}
        </LayoutDimensionsContext.Provider>
    );
}