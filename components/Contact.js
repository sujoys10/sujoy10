import React from 'react';
import styles from '../styles/Contact.module.css';


export default function Contact(){
    return (
        <div className={styles.contact}>
            <div className={styles.icon}>
                <a href="https://github.com/sujoys10" target="_blank">
                    <img src="Github.png" alt="github" />
                </a>
            </div>
            <div className={styles.icon}>
                <a href="https://www.linkedin.com/in/sujoy-saha-768465b5/" target="_blank">
                    <img src="Linkedin.png" alt="linkedin" />                
                </a>
            </div>
            <div className={styles.icon}>
                <a href="https://twitter.com/sujoys10" target="_blank">
                    <img src="Twitter.png" alt="twitter" />                
                </a>
            </div>
        </div>
    )
}