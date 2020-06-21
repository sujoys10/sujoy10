import React from 'react';
import styles from '../styles/BlogCard.module.css';


export default function BlogCard({ blog: { name, desc, url } }){
    return (
        <div className={styles.blogCard}>
            <a 
             className={styles.name}
             href={url}
             target="_blank"
            >{name}</a>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}