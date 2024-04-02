import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About me</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Education</h3>
                        <p>
                            I am currently studying Commerce & Computer Science at Monash University in Melbourne, Australia. My specializations are in Data Science & Finance.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Aspirations</h3>
                        <p>
                          I aspire to become a full-stack developer and work on projects that have a positive impact on society.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Other Platforms</h3>
                        <p>
                        I am always open to connecting with new people and learning from them. You can find me on: GitHub LinkedIn Instagram Youtube
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
 };