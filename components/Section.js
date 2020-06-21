import React from 'react';
import styles from '../styles/section.module.css';

export default function Section({ link, title, children }){
    return (
        <section id={link} className={styles.section}>
            <h1 className={styles.title}>{title}</h1>
            
            {children}
        </section>
    )
}