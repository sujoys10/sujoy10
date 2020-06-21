import React from 'react';
import styles from '../styles/SkillCard.module.css';

export default function SkillCard({ skill }){
    return (
        <div className={styles.skillCard}>
            <p>{skill}</p>
        </div>
    )
}