import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar(){
    const [ menu, setMenu ] = useState(false);
    const node = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", onClickOutside);

        return () => {
            document.removeEventListener("mousedown", onClickOutside);
        }
    },[])

    const onClickOutside = (e) => {
        if(node.current.contains(e.target)) return;
        setMenu(false);
    }
    return (
        <header className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <p>Sujoy Saha</p>
            </div>
            <div className={styles.links}>
                <a href="#skills">skill</a>
                <a href="#projects">project</a>
                <a href="#blogs">blog</a>
                <a href="#about"> About</a>
            </div>
            <div
                ref={node} 
                className={styles.mobileMenu__links}
                onClick={() => setMenu(false)}
                style={{ display: menu ? 'flex' : 'none'}}
            >
                <a href="#skills">skill</a>
                <a href="#about">about</a>
                <a href="#blogs">blog</a>
                <a href="#projects">project</a>
                <a href="#skills">skill</a>
                <a href="#intro">top</a>
            </div>
            <button
             className={styles.mobileMenu}
             style={{ display: menu ? 'none' : 'block'}}
             onClick={() => setMenu(true)} 
            >
                <img src="menu.svg" alt="menu" />
            </button>
        </header>
    )
}