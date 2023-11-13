import Circle from "@mui/icons-material/Circle";
import SelectAll from "@mui/icons-material/SelectAll";


type NavButtonProps = {
    name: string;
    pageName: string;
    index: number;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, variant: number) => void;
    isMultiPage: boolean;
    activated: boolean;
};

export default function NavButton(props: NavButtonProps) {
    /**
     * Get the current icon font size, based on the current page.
     * @returns The font size.
     */
    const getIconSize = (icon: "left" | "center" | "right"): string => {
        // Internal page id recovered from page name
        const internalPageId = props.pageName.split("_")[1];

        // Active multi-page icons
        if (props.activated && props.isMultiPage) {
            if (icon === "left" || icon === "right") {
                // Icon index from page name (skip "1" as it is handled by the center icon)
                const iconIndex = (icon === "left") ? 0 : 2;

                return (internalPageId === `${iconIndex}`) ? "14px" : "9px";
            } else {
                return "48px";
            }
        }

        // Active single-page icons
        if (icon === "center") return "48px";
        return "9px";
    };

    /**
     * Get the current icon color, based on the current page.
     *
     * Note: do not overwrite the base color (!props.activated), as it is handled by the parent component.
     * @returns The icon color.
     */
    const getIconColor = (icon: "left" | "center" | "right"): string => {
        // Internal page id recovered from page name
        const internalPageId = props.pageName.split("_")[1];

        if (props.activated && props.isMultiPage) {
            if (icon === "left" || icon === "right") {
                // Icon index from page name (skip "1" as it is handled by the center icon)
                const iconIndex = (icon === "left") ? 0 : 2;

                return (internalPageId === `${iconIndex}`) ? "#fff" : "";
            } else {
                if (internalPageId === "1") return "#fff";
                return "";
            }
        } else if (props.activated && !props.isMultiPage) {
            return "#fff";
        }

        // Active single-page icons
        return "";
    };

    return (
        <button
            className="flex flex-col items-center flex-1 min-w-0"
        >
            <div className="relative flex items-center justify-between">
                {props.isMultiPage && (
                    <div
                        data-index={props.index}
                        onClick={(event: React.MouseEvent<HTMLDivElement>) => props.onClick(event, -1)}
                        className="text-gray-600 hover:text-gray-500"
                    >
                        <Circle
                            className="mr-[0.4rem] max-sm:mr-[6px]"
                            style={{
                                width: "14px",
                                marginBottom: "0.3rem",
                                fontSize: getIconSize("left"),
                                color: getIconColor("left")
                            }}
                        />
                    </div>
                )}

                <div
                    data-index={props.index}
                    onClick={(event: React.MouseEvent<HTMLDivElement>) => props.onClick(event, 0)}
                    className="text-gray-600 hover:text-gray-500"
                >
                    <SelectAll
                        style={{
                            marginBottom: "0.3rem",
                            transform: "rotate(45deg)",
                            fontSize: getIconSize("center"),
                            color: getIconColor("center")
                        }}
                    />
                </div>

                {props.isMultiPage && (
                    <div
                        data-index={props.index}
                        onClick={(event: React.MouseEvent<HTMLDivElement>) => props.onClick(event, 1)}
                        className="text-gray-600 hover:text-gray-500"
                    >
                        <Circle
                            className="ml-[0.4rem] max-sm:ml-[6px]"
                            style={{
                                width: "14px",
                                marginBottom: "0.3rem",
                                fontSize: getIconSize("right"),
                                color: getIconColor("right")
                            }}
                        />
                    </div>
                )}
            </div>

            <p
                className="text-base font-normal"
                style={{
                    color: (props.activated) ? "#fff" : "#9CA3AF"
                }}
            >
                {props.name}
            </p>
        </button>
    );
}