import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import SkillCard from '../components/SkillCard';
import styles from '../styles/Skills.module.css';

const fetcher = (url) => 
    fetch(url).then(res => res.json())

export default function Skills(){
    const [ skills, setSkills ] = useState([]);
    const { data, error } = useSWR('/api/skills', fetcher);

    useEffect(() => {
        if(data){
            const skillArray = data.skills.split(",");
            setSkills(skillArray);
        }
    },[data])

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <div className={styles.skills}>
            <div className={styles.skillList}>
                { skills.length !== 0 &&
                    skills.map((skill, i) => 
                        <SkillCard 
                            key={i}
                            skill={skill}
                        />    
                    )
                }
            </div>
        </div>
    )
}



