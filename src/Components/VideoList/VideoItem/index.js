import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  //  Does the same thing as the destructured
  //  props in the arrow function above
  // const video = props.video;

  const imageUrl =  video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="Media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
