import React from "react";

import { getImageUrl } from "../../utils";

export const VideoCard = ({ video }) => {
    return ( <div>
        <img 
            src={getImageUrl(video.imageSrc)} 
            alt={`Image of ${video.title}`}
        />
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <ul>
            {video.skills.map((skill, id) => {
                <li key={id}>{tag}</li>;
            })}
            </ul>
            <div>
                <a href={video.demo}>Demo</a>
                <a href={video.source}>Source</a>
            </div>
        </div>
    );
};