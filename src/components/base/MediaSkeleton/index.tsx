import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import { ReactNode, useEffect, useState } from "react";


export type MediaSkeletonProps = {
    type?: "image" | "video";

    fillParent?: boolean;
    width?: number;
    height?: number;

    showIcon?: boolean;
    isVisible?: boolean;
};

export default function MediaSkeleton({
    type = "image",

    fillParent = false,
    width = 64,
    height = 64,

    showIcon = true,
    isVisible = true
}: MediaSkeletonProps) {
    const [icon, setIcon] = useState<ReactNode>(undefined);

    useEffect(() => {
        switch (type) {
            case "image":
                setIcon(<ImageIcon className="!text-4xl" />);

                break;
            case "video":
                setIcon(<VideocamIcon className="!text-4xl" />);

                break;
        }
    }, [type]);

    return (
        <div
            role="status"
            className={`
                relative items-center justify-center text-white bg-gray-700
                select-none pointer-events-none p-4 overflow-hidden
                ${isVisible ? "flex" : "hidden"}
                ${fillParent ? "w-full h-full" : `!w-[${width}px] !h-[${height}px]`}
            `}
        >
            <div className={`
                absolute top-0 left-0
                w-full h-full isolate
                before:absolute before:inset-0
                before:-translate-x-full
                before:animate-[shimmer_2s_infinite]
                before:bg-gradient-to-r
                before:from-transparent before:via-rose-100/10 before:to-transparent
            `} />

            {showIcon ? icon : null}
        </div>
    );
}
