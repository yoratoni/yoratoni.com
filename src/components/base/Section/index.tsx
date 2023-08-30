import { ReactNode } from "react";


export default function Section({ children }: { children: ReactNode; }) {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full max-w-6xl overflow-hidden text-center">
            {children}
        </div>
    );
}