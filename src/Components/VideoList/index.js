import React from 'react';

import VideoListItem from './VideoItem/index';

const VideoList = (props) => {

  //  Map out the video list
  const videoItems = props.videos.map((video) => {
    //  Return a 'VideoListItem' with a 'key' based on
    //  its 'etag' as well as the actual video 'prop'
    return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
  });

  //  Return a 'ul' with 'videoItems' as content
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
