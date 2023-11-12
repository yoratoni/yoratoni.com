import { IsWorkProject } from "@/types/general";


type ProjectProps = {
    key: number;
    project: IsWorkProject;
};

export default function Project({
    key,
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