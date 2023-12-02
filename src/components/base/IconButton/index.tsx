import { ReactNode, useEffect, useState } from "react";


type IconButtonProps = {
    icon: ReactNode;

    size?: "sm" | "md" | "lg";
    isDisabled?: boolean;
    disableHover?: boolean;

    onClick?: () => void;
};

export default function IconButton({
    icon,

    size = "lg",
    isDisabled = false,
    disableHover = false,

    onClick = undefined
}: IconButtonProps) {
    const [sizeStyle, setSizeStyle] = useState("text-6xl");

    useEffect(() => {
        switch (size) {
            case "sm":
                setSizeStyle("[&>*:first-child]:text-3xl");
                break;
            case "md":
                setSizeStyle("[&>*:first-child]:text-4xl");
                break;
            case "lg":
                setSizeStyle("[&>*:first-child]:text-6xl");
                break;
        }
    }, [size]);

    return (
        <button
            className={`
                [&>*:first-child]:text-gray-300 [&>*:first-child]:transition-colors
                [&>*:first-child]:duration-150 rounded-full
                ${isDisabled ? "cursor-default [&>*:first-child]:!text-gray-500" : "cursor-pointer"}
                ${disableHover ? "" : "[&>*:first-child]:hover:text-white"}
                ${sizeStyle}
            `}
            onClick={onClick}
            disabled={isDisabled}
        >
            {icon}
        </button>
    );
}