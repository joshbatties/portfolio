import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Josh</h1>
            <p className={styles.description}>
                This is my portfolio website to display my projects. Please contact me if you'd like to learn more!
            </p>
            <a href="mailto:joshbatties.dev@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt= "Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>
    );
};