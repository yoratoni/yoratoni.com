import { ReactNode } from "react";


export default function Layout({ children }: { children: ReactNode; }) {
    return (
        <div className="absolute top-0 left-0 z-10 w-full h-full overflow-hidden">
            <header>

            </header>

            <main className="flex flex-col items-center justify-center w-full h-full px-4">
                {children}
            </main>

            <footer>

            </footer>
        </div>
    );
}