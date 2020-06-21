import React from 'react';
import styles from '../styles/Intro.module.css';

export default function Intro(){
    return (
        <div id="intro" className={styles.intro}>
            <div className={styles.intro__content}>
                <p className={styles.intro__name}>I'm SUJOY</p>
                <p className={styles.intro__bio}>A Frontend Developer</p>
            </div>
        </div>
    )
}

