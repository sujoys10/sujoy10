import React from 'react';
import styles from '../styles/About.module.css';
import Contact from '../components/Contact';


export default function About(){
    return (
        <div className={styles.about}>
            <div className={styles.bio}>
                <p>
                    Hello World, I am Sujoy Saha, a builder who love to play with React and in love with Messi's left leg. 

                    <br></br>
                    I have a obsession with ideas and problems. So I code. My aim is to make
                    consumer products to make people life 1% more effeicient. <br></br>
                    If also play for that 1%, feel free to connect with me.
                </p>
            </div>
            <div className={styles.email}>
                <b>Email : </b>
                <a href="mailto:sujoys023@gmail.com">sujoys023@gmail.com</a>
            </div>
            <p><b>Follow me on : </b></p>
            <Contact />
        </div>
    )
}