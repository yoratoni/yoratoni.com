import { ReactNode } from "react";


type SectionProps = {
    children: ReactNode;
};

export default function Section({ children }: SectionProps) {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full max-w-6xl overflow-hidden text-center">
            {children}
        </div>
    );
}