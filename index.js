import React from 'react';
import ReactDOM from 'react-dom';
import Player from './src/components/player/Player';

class BaseMarkUP extends React.Component{
  render(){
    return(
      <div>
        <Player />
        <div className='waves'></div>
      </div>
    )
  }
}

//currentSongName='Amsterdam' currentArtistName='Imagina dragons'
ReactDOM.render(<BaseMarkUP />, document.getElementById('application'));


  // return(
  //   <Provider store={store}>
  //     <Router history={history} routes={routes} />
  //   </Provider>, document.getElementById('app')
  // )
