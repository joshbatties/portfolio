import React from "react";

import skills from "../../data/skills.json";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div>
                <div>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id}>
                            <div>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div> 
           <ul>
                {
                    projects.map((projectItem, id) => {
                        return (
                        <li key={id}>
                            <img 
                                src={getImageUrl(projectItem.imageSrc)} 
                                alt={`${projectItem.organisation} Logo`}
                            />
                            <div>
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
