import React from "react";
import Data from './buttonsData';
import ClearButton from "./ClearButton";
import Button from "./Button";
import './Drum.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    //this.activatePad = this.activatePad.bind(this);
  }

  playSound(e) {
    const sound = document.getElementById('Q') ;
    console.log(sound);
    //sound.currentTime = 0;
    sound.play();
    //this.activatePad();
    //setTimeout(() => 200);
  }

  render() {
    return (
      <main className="baseboard">
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[0].name}
            symbol={Data.btnsData[0].symbol}
            playSound={this.playSound}

        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[1].name}
            symbol={Data.btnsData[1].symbol}
            sound={Data.btnsData[1].sound}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[2].name}
            symbol={Data.btnsData[2].symbol}
            sound={Data.btnsData[2].sound}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[3].name}
            symbol={Data.btnsData[3].symbol}
            sound={Data.btnsData[3].sound}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[4].name}
            symbol={Data.btnsData[4].symbol}
            sound={Data.btnsData[4].sound}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[5].name}
            symbol={Data.btnsData[5].symbol}
            sound={Data.btnsData[5].sound}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[6].name}
            symbol={Data.btnsData[6].symbol}
            sound={Data.btnsData[6].sound}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[7].name}
            symbol={Data.btnsData[7].symbol}
            sound={Data.btnsData[7].sound}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[8].name}
            symbol={Data.btnsData[8].symbol}
            sound={Data.btnsData[8].sound}
        />
      </main>
    );
  }
}

export default Calculator;