import React from 'react';

class Player extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    return(
      <div>
        <div className="player">
            <button className='menu'></button>
            <button className='search'></button>
            <div className="current-composition-title">
                <p id="current-song-name">{this.props.currentSongName || 'no-name'}</p>
                <p id="current-artist-name">{this.props.currentArtistName ||'no-artist'}</p>
            </div>
            <div className="player-controls-status">
                <input type="range" />
            </div>
            <div className="player-controls">
                <div id="current-time">-</div>
                <div className="player-controls-buttons">
                    <div id="random-playing" className='btn'></div>
                    <div id="mot-back"  className='btn'></div>
                    <div id="play" className="player-controls-buttons-play"></div>
                    <div id="mot-front"  className='btn'></div>
                    <div id="repeat-song"  className='btn'></div>
                </div>
                <div id="current-song-duration">{this.props.currentSongDuration}</div>
            </div>

        </div>
      </div>

    )
  }
}

export default Player;
