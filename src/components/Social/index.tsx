import { ReactNode } from "react";

import IconButton from "@/components/base/IconButton";


type SocialProps = {
    name: string;
    link: string;
    icon: ReactNode;
};

export default function Social({
    name,
    link,
    icon
}: SocialProps) {
    return (
        <div className="cursor-pointer opacity-70 hover:opacity-100">
            <a
                className="flex items-center gap-2"
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <IconButton
                    icon={icon}
                    size="md"
                    disableHover
                />

                <p className="text-sm font-normal text-white">
                    {name}
                </p>
            </a>
        </div>
    );
}