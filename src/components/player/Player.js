import React from 'react';

import SideBar from '../sidebar/SideBar';

class Player extends React.Component{
  constructor(props){
    super(props);

    this.openSideBar = this.openSideBar.bind(this);
    this.openSearchField = this.openSearchField.bind(this);

    this.state={
      showSidebar:false,
      showSearch:false
    }
  }

  openSideBar(){
    this.setState({
      showSidebar:!this.state.showSidebar
    })
  }

  openSearchField(){
    this.setState({
      showSearch:!this.state.showSearch
    })
  }

  render(){

    return(
      <div>
        <SideBar show={this.state.showSidebar} />
        <div className="player">
            <button onClick={this.openSideBar} className='menu'></button>
            <button onClick={this.openSearchField} className='search'></button>
            <div className="current-composition-title">
                <p id="current-song-name">{this.props.currentSongName || 'no-name'}</p>
                <p id="current-artist-name">{this.props.currentArtistName ||'no-artist'}</p>
            </div>
            <div className ='searc-field' style={{display:this.state.showSearch?'block':'none'}}>
              <input type='text' />
            </div>
            <div className="player-controls-status">
                <input type="range" />
            </div>
            <div className="player-controls">
                <div id="current-time">-</div>
                <div className="player-controls-buttons">
                    <div id="random-playing"></div>
                    <div id="mot-back"></div>
                    <div id="play" className="player-controls-buttons-play"></div>
                    <div id="mot-front"></div>
                    <div id="repeat-song"></div>
                </div>
                <div id="current-song-duration">{this.props.currentSongDuration}</div>
            </div>

        </div>
      </div>

    )
  }
}

export default Player;
