import React from "react";
import Timer from "./timer";

const VideoPlayer = () => {
    return(
        <div className="relative w-full h-screen">
            <video 
                loop 
                autoPlay 
                muted 
                playsInline
                controls={false}
                className="absolute w-full h-full object-cover"
            >
                <source src="/videos/study.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
                <Timer />
            </div>
        </div>
    )
}

export default VideoPlayer;