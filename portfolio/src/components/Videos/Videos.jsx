import React from "react";

import styles from "./Videos.module.css";

import videos from "../../data/videos.json";
import { VideoCard } from "./VideoCard";

export const Videos = () => {
    return (
        <section className={styles.container} id = "videos">
            <h2 className={styles.title}>Videos</h2>
            <div className={styles.videos}>
                {videos.map((video, id) => {
                    return <VideoCard key={id} video={video} />;
                })}
            </div>
        </section>
    );
};