import { useEffect, useState } from "react";

import Section from "@/components/base/Section";
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
        // 
    }, [pageIndex]);

    return (
        <Section>

        </Section>
    );
}