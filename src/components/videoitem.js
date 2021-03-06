import React from 'react';
import './videoitem.styles.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                {video.snippet.title}
                </div>
                <div>
                {video.snippet.channelTitle}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;