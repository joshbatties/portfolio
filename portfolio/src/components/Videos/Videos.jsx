import React from "react";

import videos from "../../data/videos.json";
import { VideoCard } from "./VideoCard";

export const Videos = () => {
    return (
        <section>
            <h2>Videos</h2>
            <div>
                {videos.map((video, id) => {
                    return <VideoCard key={id} video={video} />;
                })}
            </div>
        </section>
    );
};