import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';


export default function Layout({ children }){
    return (
        <div >
            <Navbar />
            {children}
            <footer className={styles.footer}>
                &#169; 2020, Sujoy Saha
            </footer>
        </div>
    )
}