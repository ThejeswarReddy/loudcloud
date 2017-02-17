import React from 'react';
import { connect } from 'react-redux';

const formatTime = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let secondsLeft = seconds % 60;
  const paddedSec = secondsLeft < 10 ? `0${secondsLeft}` : `${secondsLeft}`
  return minutes + ':' + paddedSec;
}

const percentComplete = (elapsed, total) => (
  ((elapsed / total) * 100) + '%'
)

const ProgressBar = ({ elapsedTime, duration, trackPlaying, receiveCurrentTrack }) => {
  const formattedElapsedTime = formatTime(elapsedTime);
  const formattedDuration = formatTime(duration);
  const style = {width: percentComplete(elapsedTime, duration)}

  const handleClick = (e) => {
    var relClickPos = e.nativeEvent.offsetX;
    const elapsedTime = Math.floor((relClickPos / 225) * duration)
    receiveCurrentTrack({ elapsedTime, changeTime: true })
  }

  return (
    <div className='progress-bar'>
      <div className='elapsed-time-ticker'>
        <span>{ formattedElapsedTime }</span>
      </div>
      <div onClick={ handleClick } className='progress-bar-detail'>
        <div className='track-duration-bar'>
        </div>
          <div className='elapsed-time-bar' style={ style }>
            <div className='time-bar-circle'></div>
          </div>
      </div>
      <div className='bar-duration-detail'>
        <span>{ formattedDuration }</span>
      </div>
    </div>
  )
}

const mapStateToProps = ({ currentTrack }) => ({
  elapsedTime: currentTrack.elapsedTime,
  duration: currentTrack.duration
})

export default connect(
  mapStateToProps
)(ProgressBar);
