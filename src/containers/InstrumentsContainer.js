import React from "react";
import Tone from "tone";
// import Snare from "../components/Snare";
// import Hihat1 from "../components/Hihat1";
// import Hihat2 from "../components/Hihat2";
import KickEnvelopeContainer from "./KickEnvelopeContainer";
import KickOscControlsContainer from "./KickOscControlsContainer";
import SnareEnvelopeContainer from "./SnareEnvelopeContainer";
import SnareNoiseControlsContainer from "./SnareNoiseControlsContainer";
import SequencerContainer from "./SequencerContainer";

class InstrumentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kickButton: false,
      snareButton: false,
      hh1Button: false,
      hh2Button: false,
      ///Kick params:::
      kickAttack: 0.001,
      kickDecay: 0.2,
      kickSustain: 0.002,
      kickRelease: 1,
      kickPitchDecay: 0.05,
      KickOscType: "sine",
      kickNote: 32.7,

      ////Snare params::
      snarePan: 0.2,
      snareVolume: 0,
      snareAttack: 0,
      snareDecay: 0.08,
      snareSustain: 0.001,
      snareNoiseType: "brown"
    };

    ///Kick instance::
    // this.kick = new Tone.MembraneSynth().toMaster();

    ///Snare instance:::;
    //   this.snarePan = new Tone.Panner({
    //     // pan: this.state.snarePan,
    //     // volume: this.state.snareVolume,
    //     // mute: false
    //   }).toMaster();

    //   this.snare = new Tone.NoiseSynth({
    //     // noise: {
    //     //   type: this.state.snareNoiseType
    //     // },
    //     // envelope: {
    //     //   attack: this.state.snareAttack,
    //     //   decay: this.state.snareDecay,
    //     //   sustain: this.state.snareSustain
    //     // }
    //   }).connect(this.snarePan);
  }

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

  kickOscTypeHandler = e => {
    this.setState({
      KickOscType: e.target.value
    });
    // console.log(e.target.value);
  };

  kickNoteHandler = val => {
    this.setState({ kickNote: val });
  };

  ////Snare methods:::

  snareAttackHandler = val => {
    this.setState({ snareAttack: val });
    console.log(this.state.snareAttack);
  };

  snareDecayHandler = val => {
    this.setState({ snareDecay: val });
    // console.log(this.state.kickDecay);
  };

  snareSustainHandler = val => {
    this.setState({ snareSustain: val });
  };

  snareNoiseTypeHandler = e => {
    this.setState({
      snareNoiseType: e.target.value
    });
    // console.log(e.target.value);
  };

  snarePanHandler = val => {
    this.setState({ snarePan: val });
    // console.log(this.state.snareVolume);
  };

  snareVolHandler = val => {
    this.setState({ snareVolume: val });
    // console.log(this.state.snareVolume);
  };

  kickHandler = () => {
    let kick = new Tone.MembraneSynth().toMaster();
    /// Envelope params::
    kick.envelope.attack = this.state.kickAttack;
    kick.envelope.decay = this.state.kickDecay;
    kick.envelope.sustain = this.state.kickSustain;
    kick.envelope.release = this.state.kickRelease;
    // /// Osc params:::
    kick.pitchDecay = this.state.kickPitchDecay;
    kick.oscillator.type = this.state.KickOscType;

    ///Convert freq to note:::
    let frequency = this.state.kickNote;

    let noteOrder = "G# A A# B C C# D D# E F F# G".split(" ");
    let n = Math.round(49 + (12 * Math.log(frequency / 440)) / Math.log(2));
    let note = noteOrder[n % noteOrder.length];
    let index = Math.ceil((n - 3) / noteOrder.length);

    let foundNote = note + index;

    // console.log(foundNote);
    kick.triggerAttackRelease(foundNote, "8n");
  };

  snareHandler = () => {
    let snarePan = new Tone.Panner({}).toMaster();

    let snare = new Tone.NoiseSynth({}).connect(snarePan);

    snare.volume.value = this.state.snareVolume;
    snarePan.pan.value = this.state.snarePan;
    snare.noise.type = this.state.snareNoiseType;
    snare.envelope.attack = this.state.snareAttack;
    snare.envelope.decay = this.state.snareDecay;
    snare.envelope.sustain = this.state.snareSustain;
    snare.triggerAttackRelease("8n");
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
                  <KickOscControlsContainer
                    kickPitchDecay={this.state.kickPitchDecay}
                    kickPitchDecayHandler={this.kickPitchDecayHandler}
                    kickOscTypeHandler={this.kickOscTypeHandler}
                    kickNote={this.state.kickNote}
                    kickNoteHandler={this.kickNoteHandler}
                  />
                </div>
              </div>
            ) : null}

            {this.state.snareButton ? (
              <div className="container">
                <div>
                  <SnareEnvelopeContainer
                    snareAttack={this.state.snareAttack}
                    snareAttackHandler={this.snareAttackHandler}
                    ///
                    snareDecay={this.state.snareDecay}
                    snareDecayHandler={this.snareDecayHandler}
                    ///
                    snareSustain={this.state.snareSustain}
                    snareSustainHandler={this.snareSustainHandler}
                    ///
                    snareHandler={this.snareHandler}
                  />
                </div>
                <div>
                  <SnareNoiseControlsContainer
                    snarePan={this.state.snarePan}
                    snarePanHandler={this.snarePanHandler}
                    snareNoiseTypeHandler={this.snareNoiseTypeHandler}
                    snareVolume={this.state.snareVolume}
                    snareVolHandler={this.snareVolHandler}
                  />
                </div>
              </div>
            ) : null}
            {/* {this.state.hh1Button ? <Hihat1 /> : null}
            {this.state.hh2Button ? <Hihat2 /> : null} */}
            {/* <Kick time={this.props} />
            <Snare />
            <Hihat1 />
            <Hihat2 /> */}

            <SequencerContainer
              kickHandler={this.kickHandler}
              snareHandler={this.snareHandler}
              // time={this.props.time}
            />
          </div>
        </h1>
      </div>
    );
  }
}

export default InstrumentsContainer;
