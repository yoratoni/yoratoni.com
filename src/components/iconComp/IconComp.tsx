import * as MuiIcons from "@mui/icons-material";


const IconComp: React.FC<IconProps> = ({ icon }) => {
    // eslint-disable-next-line import/namespace
    const Icon = icon && MuiIcons[icon];

    return (
        <div role="none">
            {Icon && (
                <Icon />
            )}
        </div>
    );
};


export default IconComp;