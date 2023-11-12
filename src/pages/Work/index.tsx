import { useEffect, useState } from "react";

import Project from "@/components/Project";
import config from "@/configs/main.config";
import { IsWorkProject } from "@/types/general";


type WorkProps = {
    pageIndex: number;
    maxPages: number;
};

export default function Work({
    pageIndex,
    maxPages
}: WorkProps) {
    const [currProjects, setCurrProjects] = useState<IsWorkProject[]>([]);

    useEffect(() => {
        const nbProjects = Object.keys(config.work).length / maxPages;

        let projects : IsWorkProject[] = [];

        if (pageIndex < maxPages - 1) {
            // Slice equitably the projects for each page
            projects = config.work.slice(pageIndex * nbProjects, (pageIndex + 1) * nbProjects);
        } else {
            // In the case of the last page, we take all the remaining projects
            projects = config.work.slice(pageIndex * nbProjects);
        }

        setCurrProjects(projects);
    }, [pageIndex]);

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full max-w-6xl space-y-4 overflow-hidden text-center">
            {currProjects.map((project, index) => (
                <Project
                    key={index}
                    project={project}
                />
            ))}
        </div>
    );
}