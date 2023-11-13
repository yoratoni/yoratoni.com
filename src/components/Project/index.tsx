import { IsWorkProject } from "@/types/general";


type ProjectProps = {
    project: IsWorkProject;
};

export default function Project({
    project
}: ProjectProps) {
    return (
        <a className="px-2 py-1 border-2">
            <h5 className="text-3xl font-normal">
                {project.title}
            </h5>
        </a>
    );
}