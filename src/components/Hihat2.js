import React from "react";
import "../App.css";
import Tone from "tone";

class Hihat2 extends React.Component {
  state = {
    pan: -0.3
  };

  clickHandler = () => {
    // let hithatPan = new Tone.PanVol({
    //   pan: 0.35
    // }).toMaster();
    let PanVol = new Tone.PanVol({
      pan: -0.5,
      volume: -10,
      mute: false
    }).toMaster();

    let hihat2 = new Tone.MetalSynth({
      frequency: 400,
      envelope: {
        attack: 0.01,
        decay: 0.01,
        release: 0.005
      },
      harmonicity: 1.1,
      modulationIndex: 24,
      resonance: 4000,
      octaves: 2.5
    }).connect(PanVol);
    hihat2.triggerAttackRelease("8n");
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.clickHandler} type="button">
          Hi hat2
        </button>
      </div>
    );
  }
}

export default Hihat2;
