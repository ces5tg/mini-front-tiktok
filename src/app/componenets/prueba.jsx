import React from 'react';
import YouTube from 'react-youtube';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsViewed: 0,
      isPaused: false,
    };
    this.timer = null;
  }

  handleReady = (event) => {
    const player = event.target;
    player.playVideo(); // Iniciar la reproducción del video automáticamente
    this.startTimer(player);
    this.removeYouTubeButtons(player);
  };

  handlePause = () => {
    this.setState({ isPaused: true });
    this.stopTimer();
  };

  handlePlay = () => {
    this.setState({ isPaused: false });
    const player = this.player.getInternalPlayer();
    this.startTimer(player);
  };

  startTimer = (player) => {
    this.timer = setInterval(() => {
      const currentTime = player.getCurrentTime();
      this.setState(prevState => ({ secondsViewed: prevState.secondsViewed + 1 }));
      console.log(`Segundos visualizados: ${this.state.secondsViewed}`);
      if (this.state.secondsViewed >= 15 || player.getPlayerState() === 0 || this.state.isPaused) {
        this.stopVideo(player);
      }
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  stopVideo = (player) => {
    this.stopTimer();
    const viewedSeconds = player.getCurrentTime();
    console.log(`Segundos visualizados totales: ${viewedSeconds}`);
    player.pauseVideo();
  };

  removeYouTubeButtons = (player) => {
    const controls = player.getIframe().querySelector('.ytp-chrome-bottom');
    controls.style.display = 'none';
  };

  render() {
    const { videoId } = this.props;

    return (
      <div style={{ position: 'relative' }}>
        <YouTube
          videoId={"he_dPEEWeLY"}
          opts={{ playerVars: { controls: 0 } }}
          onReady={this.handleReady}
          onPause={this.handlePause}
          onPlay={this.handlePlay}
          onEnd={this.stopVideo}
          ref={(player) => {
            this.player = player;
          }}
        />
        <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px' }}>
          <button onClick={() => console.log('Like')}>Like</button>
          <button onClick={() => console.log('Dislike')}>Dislike</button>
          <button onClick={() => console.log('Comentarios')}>Comentarios</button>
        </div>
      </div>
    );
}
}
export default VideoList;
//=================================================================================0