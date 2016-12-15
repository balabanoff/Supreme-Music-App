import React from 'react';

class SideBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show:this.props.show
    }

    this.hideSideBar = this.hideSideBar.bind(this);
  }

  hideSideBar(){
    alert('close');
  }

  render(){
    const inlineStyle = {
      display:this.props.show ? 'block' : 'none'
    }
    return(
      <div className='side-bar' style={inlineStyle}>
        asdasd
        <button onClick={this.hideSideBar}>back</button>
      </div>
    );
  }
}


export default SideBar;
