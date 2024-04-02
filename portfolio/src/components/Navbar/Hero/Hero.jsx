import React from "react";
import { getImageUrl } from "../../../utils";

export const Hero = () => {
    return <section>
        <div>
            <h1>Hi, I'm Josh</h1>
            <p>
                I'm a third year Commerce/Computer Science student at Monash University. This is my portfolio website to display my projects. Please contact me if you'd like to learn more!
            </p>
            <a href="mailto:joshbatties.dev@gmail.com">Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt= "Hero image of me"/>
    </section>;
};