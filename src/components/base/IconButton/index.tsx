import { ReactNode } from "react";


type IconButtonProps = {
    icon: ReactNode;

    isDisabled?: boolean;

    onClick?: () => void;
};

export default function IconButton({
    icon,

    isDisabled = false,

    onClick = undefined
}: IconButtonProps) {
    return (
        <button
            className={`
                [&>*:first-child]:text-6xl [&>*:first-child]:hover:text-white
                [&>*:first-child]:text-gray-300 [&>*:first-child]:transition-colors
                [&>*:first-child]:duration-150 rounded-full
                ${isDisabled ? "cursor-default [&>*:first-child]:!text-gray-500" : "cursor-pointer"}
            `}
            onClick={onClick}
            disabled={isDisabled}
        >
            {icon}
        </button>
    );
}