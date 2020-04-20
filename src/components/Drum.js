import React from "react";
import Data from './buttonsData';
import ClearButton from "./ClearButton";
import Button from "./Button";
import './Drum.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  playSound= (e, name) => {
    const sound = document.getElementById(name) ;
    console.log(sound);
    sound.play();
  }

  render() {
    return (
      <main className="baseboard">
        <Button
            name={Data.btnsData[0].name}
            symbol={Data.btnsData[0].symbol}
            sound={Data.btnsData[0].sound}
            playSound={this.playSound}
        />
        <Button
            name={Data.btnsData[1].name}
            symbol={Data.btnsData[1].symbol}
            sound={Data.btnsData[1].sound}
            playSound={this.playSound}
        />
        <Button
            name={Data.btnsData[2].name}
            symbol={Data.btnsData[2].symbol}
            sound={Data.btnsData[2].sound}
            playSound={this.playSound}
        />
        <Button
            name={Data.btnsData[3].name}
            symbol={Data.btnsData[3].symbol}
            sound={Data.btnsData[3].sound}
            playSound={this.playSound}
        />
        <Button
            name={Data.btnsData[4].name}
            symbol={Data.btnsData[4].symbol}
            sound={Data.btnsData[4].sound}
            playSound={this.playSound}
        />
        <Button
            name={Data.btnsData[5].name}
            symbol={Data.btnsData[5].symbol}
            sound={Data.btnsData[5].sound}
            playSound={this.playSound}
        />
        <Button
            name={Data.btnsData[6].name}
            symbol={Data.btnsData[6].symbol}
            sound={Data.btnsData[6].sound}
            playSound={this.playSound}
        />
        <Button
            name={Data.btnsData[7].name}
            symbol={Data.btnsData[7].symbol}
            sound={Data.btnsData[7].sound}
            playSound={this.playSound}
        />        
        <Button
            name={Data.btnsData[8].name}
            symbol={Data.btnsData[8].symbol}
            sound={Data.btnsData[8].sound}
            playSound={this.playSound}
        />

      </main>
    );
  }
}

export default Calculator;