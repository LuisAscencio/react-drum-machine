import React from "react";
import "../App.css";
import Tone from "tone";

class Hihat1 extends React.Component {
  state = {
    pan: -0.3
  };

  clickHandler = () => {
    // let hithatPan = new Tone.PanVol({
    //   pan: 0.35
    // }).toMaster();
    let PanVol = new Tone.PanVol({
      pan: -0.3,
      volume: -15,
      mute: false
    }).toMaster();

    let hihat1 = new Tone.MetalSynth({
      frequency: 200,
      envelope: {
        attack: 0.008,
        decay: 0.052,
        release: 0.002
      },
      harmonicity: 5.1,
      modulationIndex: 32,
      resonance: 3000,
      octaves: 1.5
    }).connect(PanVol);
    hihat1.triggerAttackRelease("8n");
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.clickHandler} type="button">
          Hi hat1
        </button>
      </div>
    );
  }
}

export default Hihat1;
