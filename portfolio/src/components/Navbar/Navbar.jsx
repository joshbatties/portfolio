import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    return (
    <nav className={styles.navbar}>
       <a className={styles.title} href="/">
        Home
        </a>
       <div className= {styles.menu}>
        <img className={styles.menuBtn} src={getImageUrl("nav/menuIcon.png")}/>
        <ul className= {styles.menuItems}>
            <li>
                <a href="#about">About me</a>
            </li>
            <li>
                <a href="#projects">My Projects</a>
            </li>
            <li>
                <a href="#videos">My Videos</a>
            </li>
            <li>
                <a href="#contact">Contact me</a>
            </li>
        </ul>
       </div>
    </nav>
    );
};