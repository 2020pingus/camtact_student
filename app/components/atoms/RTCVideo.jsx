/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import React, { useRef, useEffect } from 'react';

const RTCVideo = ({ mediaStream, style }) => {
  const viewRef = useRef(null);

  useEffect(() => {
    if (!viewRef.current) return;
    viewRef.current.srcObject = mediaStream || null;
  }, [mediaStream]);

  return (
    <video
      ref={viewRef}
      autoPlay
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
};

export default RTCVideo;
