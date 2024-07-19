"use client";
import { getLatestProjects } from "@/lib/db";
import { useEffect, useRef, useState } from "react";
import ProjectSkeleton from "./ProjectSkeleton";
import { ProjectCard } from "./ProjectCard";
import styles from './ProjectList.module.css';


export default function ProjectList({ perPage }) {
    const [offset, setOffset] = useState(0);
    const [projects, setProjects] = useState([]);
    const [hasData, setHasData] = useState(true);
    const [fetching, setFetching] = useState(false);
    const scrollTrigger = useRef(null);

    let skeletons = [];
    for (let i = 0; i < perPage; i++) {
        skeletons.push(<ProjectSkeleton key={i} />);
    }

    async function loadMoreProjects() {
        if (hasData) {
            setFetching(true);
            const fetchedProjects = await getLatestProjects(offset, perPage);

            if (fetchedProjects.length < perPage) {
                setHasData(false);
            }

            setProjects(projects => [...projects, ...fetchedProjects]);
            setOffset(offset + perPage);
            setFetching(false);
        }
    }

    useEffect(() => {
        if (typeof window === 'undefined' || !window.IntersectionObserver) return;

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMoreProjects();
            }
        });

        if (scrollTrigger.current) {
            observer.observe(scrollTrigger.current);
        }

        return () => {
            if (scrollTrigger.current) {
                observer.unobserve(scrollTrigger.current);
            }
        }
    }, [hasData, offset]);

    return <>
        <div className={styles.projectWrapper}>
            {projects.map(project => (
                <ProjectCard title={project.title} description={project.description} key={project.name} />
            ))}
            {/* Only show skeletons when we are fetching */}
            {fetching ? skeletons : null}
        </div>
        {/* This element triggers more data fetching when in view */}
        {hasData && !fetching ? <div ref={scrollTrigger} /> : null}
    </>
}