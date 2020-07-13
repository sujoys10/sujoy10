import React, { useState, useEffect } from 'react';
import styles from '../styles/ProjectCard.module.css';


export default function ProjectCard({ project: { name, desc, stack, url, github } }){
    const [stackList, setStackList] = useState([]);
    const [description, setDescription] = useState([]);

    useEffect(() => {
        setStackList(stack.split(","));
        setDescription(desc.split(","));
    },[])
    return (
        <div className={styles.project}>
            <div className={styles.details}>
                <p className={styles.name}>{name}</p>
                <ul>
                    { description.length !== 0 && (
                        description.map((point,i) => 
                            <li key={i} className={styles.desc}>{point}</li>)
                    )}
                </ul>
                <p className={styles.stackTitle}>stack</p>
                <div className={styles.stackList}>
                    { stackList.length !== 0  &&
                        stackList.map((stack,i) => 
                            <span key={i} className={styles.stack}>{stack}</span>    
                        )
                    }
                </div>
                <div className={styles.linkbox}>
                    <a className={styles.link} href={url} target="_blank">Open App</a>
                    <a className={styles.link} href={github} target="_blank">Github</a>
                </div>
            </div>
        </div>
    )
}