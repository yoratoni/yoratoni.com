import { ReactNode } from "react";


type IconButtonProps = {
    icon: ReactNode;

    onClick?: () => void;
};

export default function IconButton({
    icon,

    onClick = undefined
}: IconButtonProps) {
    return (
        <button
            className="[&>*:first-child]:text-6xl [&>*:first-child]:hover:text-white [&>*:first-child]:text-gray-300 [&>*:first-child]:transition-colors [&>*:first-child]:duration-150"
            onClick={onClick}
        >
            {icon}
        </button>
    );
}