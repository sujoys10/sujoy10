import React from 'react';
import useSWR from 'swr';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';


const fetcher = (url) => 
    fetch(url).then(res => res.json())

export default function Projects(){
    const { data, error } = useSWR('/api/projects/stage', fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <div className={styles.projects}>
            { data.projects.length !== 0 &&
                data.projects.map(project => 
                    <ProjectCard 
                        key={project.id}
                        project={project}
                    />    
                )
            }
        </div>
    )
}



