import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

function VideoPlayerWithCounter() {
  const [counter, setCounter] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [pauseTime, setPauseTime] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);
  const playerRef = useRef(null);

  const startCounter = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCounter(prevCounter => {
          const newCounter = prevCounter + 1;
          console.log(`Counter: ${newCounter} seconds`);
          if (newCounter === 15) {
            console.log('Deteniendo el video');
            playerRef.current.pauseVideo();
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return newCounter;
        });
      }, 1000);
    }
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      console.log('Counter stopped');
    }
  };

  const handleReady = (event) => {
    playerRef.current = event.target;
    console.log('Video ready');
  };

  const handlePlay = () => {
    console.log('Video played');
    if (!startTime) {
      setStartTime(new Date().getTime());
      startCounter();
    } else if (pauseTime) {
      const elapsed = new Date().getTime() - pauseTime;
      setStartTime(startTime + elapsed);
      startCounter();
    }
    setIsPlaying(true);

    // Detener el video después de 15 segundos
    setTimeout(() => {
      if (counter >= 15  ) {
        console.log('Deteniendo el video después de 15 segundos');
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      }
    }, 15000)
  };

  const handlePause = () => {
    console.log('Video paused');
    setPauseTime(new Date().getTime());
    stopCounter();
    setIsPlaying(false);
  };

  const handleEnd = () => {
    console.log('Video ended');
    stopCounter();
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => {
      stopCounter();
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <YouTube
          videoId="he_dPEEWeLY"
          opts={{ playerVars: { controls: 0, autoplay: 1 } }}
          onReady={handleReady}
          onPause={handlePause}
          onPlay={handlePlay}
          onEnd={handleEnd}
          className="video-frame"
        />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2">
        <button onClick={() => playerRef.current.playVideo()}>Start</button>
        <button onClick={() => playerRef.current.stopVideo()}>Stop</button>
        <button onClick={() => console.log('Like')}>Like</button>
        <button onClick={() => console.log('Dislike')}>Dislike</button>
        <button onClick={() => console.log('Comentarios')}>Comentarios</button>
        <div>Counter: {isPlaying ? counter : 0} seconds</div>
        <div>Elapsed time: {startTime && new Date().getTime() - startTime} milliseconds</div>
      </div>
    </div>
  );
}

export default VideoPlayerWithCounter;
