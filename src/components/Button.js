import React from 'react';
//import Data from './buttonsData';
class DecimalButton extends React.Component{ 
    render(){        
        return(
        <button id={this.props.name} className='arithmetic' onClick={e=>this.props.playSound(e,`playSound${this.props.name}`)}>
            <audio className="clip" id={`playSound${this.props.name}`} src={this.props.sound}/>
            {console.log(this.props.sound)}
            {this.props.symbol}
        </button>
        )        
    }
}
export default DecimalButton;