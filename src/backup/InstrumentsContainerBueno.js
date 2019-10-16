import React from "react";
import Tone from "tone";
import Snare from "../components/Snare";
import Hihat1 from "../components/Hihat1";
import Hihat2 from "../components/Hihat2";
import KickEnvelopeContainer from "./KickEnvelopeContainer";
import OscControlsContainer from "./OscControlsContainer";
import SequencerContainer from "./SequencerContainer";

class InstrumentsContainer extends React.Component {
  state = {
    kickButton: false,
    snareButton: false,
    hh1Button: false,
    hh2Button: false,
    ///Kick params:::
    kickAttack: 0.001,
    kickDecay: 0.2,
    kickSustain: 0.002,
    kickRelease: 1,
    kickPitchDecay: 0.07
  };
  /// Sound settings methods:::
  clickHandlerKickButton = e => {
    console.log("event", e.target);
    this.setState({
      kickButton: true,
      snareButton: false,
      hh1Button: false,
      hh2Button: false
    });
  };

  clickHandlerSnareButton = e => {
    console.log("event", e.target);
    this.setState({
      snareButton: true,
      kickButton: false,
      hh1Button: false,
      hh2Button: false
    });
  };

  clickHandlerHh1Button = e => {
    console.log("event", e.target);
    this.setState({
      hh1Button: true,
      kickButton: false,
      snareButton: false,
      hh2Button: false
    });
  };

  clickHandlerHh2Button = e => {
    console.log("event", e.target);
    this.setState({
      hh2Button: true,
      kickButton: false,
      snareButton: false,
      hh1Button: false
    });
  };

  /// Kick methods::::

  kickAttackHandler = val => {
    this.setState({ kickAttack: val });
    // console.log(this.state.kickAttack);
  };

  kickDecayHandler = val => {
    this.setState({ kickDecay: val });
    // console.log(this.state.kickDecay);
  };

  kickSustainHandler = val => {
    this.setState({ kickSustain: val });
    // console.log(this.state.kickSustain);
  };

  kickReleaseHandler = val => {
    this.setState({ kickRelease: val });
    // console.log(this.state.kickRelease);
  };

  kickPitchDecayHandler = val => {
    this.setState({ kickPitchDecay: val });
    // console.log(this.state.kickPitchDecay);
  };

  kickHandler = () => {
    let kick = new Tone.MembraneSynth({
      pitchDecay: this.state.kickPitchDecay,
      octaves: 5,
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: this.state.kickAttack,
        decay: this.state.kickDecay,
        sustain: this.state.kickSustain,
        release: this.state.kickRelease,
        attackCurve: "exponential"
      }
    }).toMaster();
    kick.triggerAttackRelease("c1", "8n");
  };

  render() {
    return (
      <div>
        <h1>
          Instruments Container
          <br />
          <button type="button" onClick={this.clickHandlerKickButton}>
            Kick Params
          </button>
          <button type="button" onClick={this.clickHandlerSnareButton}>
            Snare Params
          </button>
          <button type="button" onClick={this.clickHandlerHh1Button}>
            Closed Hi hat Params
          </button>
          <button type="button" onClick={this.clickHandlerHh2Button}>
            Open Hi hat Params
          </button>
          <div>
            {this.state.kickButton ? (
              <div className="container">
                <div>
                  <KickEnvelopeContainer
                    kickAttack={this.state.kickAttack}
                    kickAttackHandler={this.kickAttackHandler}
                    ///
                    kickDecay={this.state.kickDecay}
                    kickDecayHandler={this.kickDecayHandler}
                    ///
                    kickSustain={this.state.kickSustain}
                    kickSustainHandler={this.kickSustainHandler}
                    ///
                    kickRelease={this.state.kickRelease}
                    kickReleaseHandler={this.kickReleaseHandler}
                    ///
                    kickHandler={this.kickHandler}
                  />
                </div>
                <div>
                  <OscControlsContainer
                    kickPitchDecay={this.state.kickPitchDecay}
                    kickPitchDecayHandler={this.kickPitchDecayHandler}
                  />
                </div>
              </div>
            ) : null}
            {/* {this.state.kickButton ? <Kick knobs={true} /> : null} */}
            {this.state.snareButton ? <Snare /> : null}
            {this.state.hh1Button ? <Hihat1 /> : null}
            {this.state.hh2Button ? <Hihat2 /> : null}
            {/* <Kick time={this.props} />
            <Snare />
            <Hihat1 />
            <Hihat2 /> */}

            <SequencerContainer />
          </div>
        </h1>
      </div>
    );
  }
}

export default InstrumentsContainer;
