import LinkIcon from "@mui/icons-material/Link";

import config from "@/configs/main.config";


export default function Work() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full max-w-full max-h-full px-8 space-y-4 overflow-hidden">
            {config.projects.map((work, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center w-full max-w-2xl p-4 space-y-5 text-center bg-black border-4 border-black bg-opacity-30 border-opacity-10 rounded-xl"
                >
                    <div className="flex items-center justify-center w-full text-center">
                        <h2 className="text-2xl font-semibold">
                            {work.name}
                        </h2>
                    </div>

                    <p className="md:hidden">
                        {work.short}
                    </p>
                    <p className="max-md:hidden">
                        {work.description.map((line, index) => (
                            <span key={index}>
                                {line}
                                {index < work.description.length - 1 && (
                                    <div className="my-[0.8em]">
                                    </div>
                                )}
                            </span>
                        ))}
                    </p>


                </div>
            ))}
        </div>
    );
}