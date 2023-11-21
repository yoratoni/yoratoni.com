type LinkProps = {
    label: string;
    href: string;
    target?: "_blank" | "_self";

    fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold";
    className?: string;
};

export default function Link(props: LinkProps) {
    return (
        <a
            className={`
                text-inherit font-${props.fontWeight ?? "medium"} hover:underline ${props.className || ""}
                outline-none focus-visible:underline
            `}
            href={props.href}
            target={props.target || "_blank"}
            rel="noreferrer"
        >
            {props.label}
        </a>
    );
}