import './VideoPlayer.css';
import video from '../../assets/video.mp4';

function VideoPlayer() {
  return (
    <div className='video-player hide'>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer;
