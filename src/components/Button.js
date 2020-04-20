import React from 'react';
//import Data from './buttonsData';

class DecimalButton extends React.Component{
    render(){        
        return(
        <button id={this.props.name} className='arithmetic' onClick={this.props.playSound}>
            <audio class="clip" id="playSound" src={this.props.sound}/>
            {this.props.symbol}
        </button>
        )        
    }
}
export default DecimalButton;
//<audio class="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>