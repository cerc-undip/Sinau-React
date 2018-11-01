import React from 'react';

class Logo extends React.Component {
  render(){
    return (
      <div>
        <img src={require('./cerc.png')} alt="CERC UNDIP" width="200" height="200" />
      </div>
    );
  }
}

export default Logo;