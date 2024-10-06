import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact me!</h2>
            <p>I am active on these platforms.</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src = {getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:joshbatties.dev@gmail.com">joshbatties.dev@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src = {getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/comingsoon">linkedin.com/comingsoon</a>
            </li>
            <li className={styles.link}>
                <img src = {getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                <a href="https://www.github.com/joshbatties">github.com/joshbatties</a>
            </li>
        </ul>
    </footer>
    );
};