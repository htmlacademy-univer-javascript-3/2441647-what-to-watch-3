/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
interface PlayerProps {
  poster: string;
  videoSrc: string;
}
const Player: React.FC<PlayerProps> = ({ poster, videoSrc }) => (
  <div className="player">
    <video src={videoSrc} className="player__video" poster={poster} />

    <Link to={'/'} type="button" className="player__exit">
      Exit
    </Link>

    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value="30" max="100" />
          <div className="player__toggler" style={{ left: '30%' }}>
            Toggler
          </div>
        </div>
        <div className="player__time-value">1:30:29</div>
      </div>

      <div className="player__controls-row">
        <button type="button" className="player__play">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <div className="player__name">Transpotting</div>

        <button type="button" className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>
);

export default Player;
