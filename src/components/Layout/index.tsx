import { ReactNode } from "react";


export default function Layout({ children }: { children: ReactNode; }) {
    return (
        <div className="absolute top-0 left-0 z-10 flex flex-col w-full h-full overflow-hidden">
            <header className="flex items-center justify-center flex-initial w-full px-6 h-9">
                <h2 className="text-xl text-center">
                    Y O R A T O N I
                </h2>
            </header>

            <main className="flex flex-col items-center justify-center flex-auto w-full px-4">
                {children}
            </main>

            <footer className="flex items-center justify-center flex-initial w-full h-20 px-6">

            </footer>
        </div>
    );
}