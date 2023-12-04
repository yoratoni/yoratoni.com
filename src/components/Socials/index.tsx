import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Social from "@/components/Social";


export default function Socials() {
    return (
        <div className="flex justify-center w-full gap-4">
            <Social
                name="GitHub"
                link="https://github.com/yoratoni"
                icon={<GitHubIcon />}
            />
            <Social
                name="LinkedIn"
                link="https://www.linkedin.com/in/yoratoni/"
                icon={<LinkedInIcon />}
            />
            <Social
                name="Instagram"
                link="https://www.instagram.com/yoratoni/"
                icon={<InstagramIcon />}
            />
        </div>
    );
}
