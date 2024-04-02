import React from "react";

import styles from './Projects.module.css';
import skills from "../../data/skills.json";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils/getImageUrl";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div> 
                <ul className={styles.projects}>
                    {projects.map((projectItem, id) => {
                        return (
                        <li key={id} className={styles.projectItem}>
                            <img 
                                src={getImageUrl(projectItem.imageSrc)} 
                                alt={`${projectItem.organisation} Logo`}
                            />
                            <div className={styles.projectItemDetails}>
                                <h3>{`${projectItem.role}, ${projectItem.organisation}`}</h3>
                                <p>{`${projectItem.startDate} - ${projectItem.endDate}`}</p>
                                <ul>
                                    {projectItem.experiences.map((project, id) => {
                                    return <li key={id}>{project}</li>;
                                })}
                                </ul>
                            </div>
                        </li>
                    );
                })}
           </ul>
        </div>
    </section>
    );
};
