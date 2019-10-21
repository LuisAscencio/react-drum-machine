import React from "react";
import Tone from "tone";

import KickEnvelopeContainer from "./KickEnvelopeContainer";
import KickOscControlsContainer from "./KickOscControlsContainer";
import SnareEnvelopeContainer from "./SnareEnvelopeContainer";
import SnareNoiseControlsContainer from "./SnareNoiseControlsContainer";
import TomEnvelopeContainer from "./TomEnvelopeContainer";
import TomOscControlsContainer from "./TomOscControlsContainer";
import Hihat1EnvelopeContainer from "./Hh1EnvelopeContainer";
import Hh1OscContainer from "./Hh1OscContainer";
import Hihat2EnvelopeContainer from "./Hh2EnvelopeContainer";
import Hh2OscContainer from "./Hh2OscContainer";
import SequencerContainer from "./SequencerContainer";

class InstrumentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kickButton: false,
      snareButton: false,
      hh1Button: false,
      hh2Button: false,
      tomButton: false,
      percButton: false,

      ///Kick params:::
      kickAttack: 0.001,
      kickDecay: 0.2,
      kickSustain: 0.002,
      kickRelease: 1,
      kickPitchDecay: 0.05,
      KickOscType: "sine",
      kickNote: 32.7,
      kickVolume: 0,

      ///Tom params:::
      tomAttack: 0.15,
      tomDecay: 0.09,
      tomSustain: 0.001,
      tomRelease: 0.09,
      tomPitchDecay: 0.02,
      tomOscType: "sine",
      tomNote: 60,
      tomVolume: -15,
      tomPan: -0.2,

      ////Snare params::
      snarePan: 0.2,
      snareVolume: 0,
      snareAttack: 0,
      snareDecay: 0.08,
      snareSustain: 0.001,
      snareNoiseType: "brown",

      /// Hihat1 params:::
      hH1Pan: -0.3,
      hH1Volume: -20,
      hH1Attack: 0.008,
      hH1Decay: 0.052,
      hH1Release: 0.002,
      hH1Delay: 0,
      hH1Resonance: 3000,
      hH1Harmonicity: 5.1,

      /// Hihat2 params:::
      hH2Pan: 0.5,
      hH2Volume: -10,
      hH2Attack: 0.05,
      hH2Decay: 0.1,
      hH2Release: 0.1,
      hH2Frequency: 400,
      hH2Resonance: 4000,
      hH2Harmonicity: 1.1,

      /// Perc Params::
      percPan: -0.6,
      percVolume: -15,
      percAttak: 0.05,
      percDamp: 4000,
      percResonance: 0.7,
      percNote: 300
    };
  }

  /// Sound settings methods:::
  clickHandlerKickButton = e => {
    this.setState({
      kickButton: true,
      snareButton: false,
      hh1Button: false,
      hh2Button: false,
      tomButton: false,
      percButton: false
    });
  };

  clickHandlerSnareButton = e => {
    this.setState({
      snareButton: true,
      kickButton: false,
      hh1Button: false,
      hh2Button: false,
      tomButton: false,
      percButton: false
    });
  };

  clickHandlerTomButton = e => {
    this.setState({
      tomButton: true,
      snareButton: false,
      kickButton: false,
      hh1Button: false,
      hh2Button: false,
      percButton: false
    });
  };
  clickHandlerHh1Button = e => {
    this.setState({
      hh1Button: true,
      kickButton: false,
      snareButton: false,
      hh2Button: false,
      tomButton: false,
      percButton: false
    });
  };

  clickHandlerHh2Button = e => {
    this.setState({
      hh2Button: true,
      kickButton: false,
      snareButton: false,
      hh1Button: false,
      tomButton: false,
      percButton: false
    });
  };
  clickHandlerPercButton = e => {
    this.setState({
      percButton: true,
      hh2Button: false,
      kickButton: false,
      snareButton: false,
      hh1Button: false,
      tomButton: false
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

  kickVolumeHandler = val => {
    this.setState({ kickVolume: val });
  };

  ////Snare methods:::

  snareAttackHandler = val => {
    this.setState({ snareAttack: val });
  };

  snareDecayHandler = val => {
    this.setState({ snareDecay: val });
  };

  snareSustainHandler = val => {
    this.setState({ snareSustain: val });
  };

  snareNoiseTypeHandler = e => {
    this.setState({
      snareNoiseType: e.target.value
    });
  };

  snarePanHandler = val => {
    this.setState({ snarePan: val });
  };

  snareVolHandler = val => {
    this.setState({ snareVolume: val });
  };

  /// Tom methods::::

  tomAttackHandler = val => {
    this.setState({ tomAttack: val });
    // console.log(this.state.kickAttack);
  };

  tomDecayHandler = val => {
    this.setState({ tomDecay: val });
    // console.log(this.state.kickDecay);
  };

  tomSustainHandler = val => {
    this.setState({ tomSustain: val });
    // console.log(this.state.kickSustain);
  };

  tomReleaseHandler = val => {
    this.setState({ tomRelease: val });
    // console.log(this.state.kickRelease);
  };

  tomPitchDecayHandler = val => {
    this.setState({ tomPitchDecay: val });
    // console.log(this.state.kickPitchDecay);
  };

  tomOscTypeHandler = e => {
    this.setState({
      tomOscType: e.target.value
    });
    // console.log(e.target.value);
  };

  tomNoteHandler = val => {
    this.setState({ tomNote: val });
  };

  tomVolumeHandler = val => {
    this.setState({ tomVolume: val });
  };

  tomPanHandler = val => {
    this.setState({ tomPan: val });
  };

  ///Hi hat 1 methods::::

  hH1PanHandler = val => {
    this.setState({ hH1Pan: val });
  };

  hH1VolumeHandler = val => {
    this.setState({ hH1Volume: val });
    // console.log(this.state.hH1Volume);
  };

  hH1AttackHandler = val => {
    this.setState({ hH1Attack: val });
  };

  hH1DecayHandler = val => {
    this.setState({ hH1Decay: val });
    // console.log(this.state.hH1Decay);
  };

  hH1ReleaseHandler = val => {
    this.setState({ hH1Release: val });
  };

  hH1DelayHandler = val => {
    this.setState({ hH1Delay: val });
  };

  hH1ResonanceHandler = val => {
    this.setState({ hH1Resonance: val });
  };

  hH1HarmonicityHandler = val => {
    this.setState({ hH1Harmonicity: val });
    // console.log(this.state.hH1Harmonicity);
  };

  ///Hi hat 2 methods::::

  hH2PanHandler = val => {
    this.setState({ hH2Pan: val });
  };

  hH2VolumeHandler = val => {
    this.setState({ hH2Volume: val });
    // console.log(this.state.hH1Volume);
  };

  hH2AttackHandler = val => {
    this.setState({ hH2Attack: val });
  };

  hH2DecayHandler = val => {
    this.setState({ hH2Decay: val });
    // console.log(this.state.hH1Decay);
  };

  hH2ReleaseHandler = val => {
    this.setState({ hH2Release: val });
  };

  hH2FrequencyHandler = val => {
    this.setState({ hH2Frequency: val });
  };

  hH2ResonanceHandler = val => {
    this.setState({ hH2Resonance: val });
  };

  hH2HarmonicityHandler = val => {
    this.setState({ hH2Harmonicity: val });
    // console.log(this.state.hH1Harmonicity);
  };

  ///Triggers:::

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
    kick.volume.value = this.state.kickVolume;

    ///Convert freq to note:::
    let frequency = this.state.kickNote;

    let noteOrder = "G# A A# B C C# D D# E F F# G".split(" ");
    let n = Math.round(49 + (12 * Math.log(frequency / 440)) / Math.log(2));
    let note = noteOrder[n % noteOrder.length];
    let index = Math.ceil((n - 3) / noteOrder.length);

    let foundNote = note + index;

    // console.log(foundNote);
    kick.triggerAttackRelease(foundNote, "8n");
    kick = null;
    frequency = null;
    frequency = null;
    noteOrder = null;
    n = null;
    note = null;
    index = null;
    foundNote = null;
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
    snarePan = null;
    snare = null;
  };

  tomHandler = () => {
    let tomPan = new Tone.Panner({}).toMaster();
    let tom = new Tone.MembraneSynth().connect(tomPan);
    /// Envelope params::

    tom.envelope.attack = this.state.tomAttack;
    tom.envelope.decay = this.state.tomDecay;
    tom.envelope.sustain = this.state.tomSustain;
    tom.envelope.release = this.state.tomRelease;
    // /// Osc params:::
    tom.pitchDecay = this.state.tomPitchDecay;
    tom.oscillator.type = this.state.tomOscType;
    tom.volume.value = this.state.tomVolume;
    tomPan.pan.value = this.state.tomPan;

    ///Convert freq to note:::
    let frequency = this.state.tomNote;

    let noteOrder = "G# A A# B C C# D D# E F F# G".split(" ");
    let n = Math.round(49 + (12 * Math.log(frequency / 440)) / Math.log(2));
    let note = noteOrder[n % noteOrder.length];
    let index = Math.ceil((n - 3) / noteOrder.length);

    let foundNote = note + index;

    // console.log(foundNote);
    tom.triggerAttackRelease(foundNote, "8n");

    tomPan = null;
    tom = null;
    frequency = null;
    noteOrder = null;
    n = null;
    note = null;
    index = null;
    foundNote = null;
  };

  hH1Handler = () => {
    let hH1Pan = new Tone.Panner({}).toMaster();
    let pinPong = new Tone.PingPongDelay({
      delayTime: 0.15,
      feedBack: 0.1
    }).connect(hH1Pan);

    let hH1 = new Tone.MetalSynth({}).connect(pinPong);
    hH1.volume.value = this.state.hH1Volume;
    hH1Pan.pan.value = this.state.hH1Pan;
    hH1.envelope.attack = this.state.hH1Attack;
    hH1.envelope.decay = this.state.hH1Decay;
    hH1.envelope.release = this.state.hH1Release;
    pinPong.wet.value = this.state.hH1Delay;
    hH1.resonance = this.state.hH1Resonance;
    hH1.harmonicity = this.state.hH1Harmonicity;
    hH1.triggerAttackRelease("8n");

    hH1Pan = null;
    pinPong = null;
    hH1 = null;
  };

  hH2Handler = () => {
    let hH2Pan = new Tone.Panner({}).toMaster();

    let hH2 = new Tone.MetalSynth({}).connect(hH2Pan);
    hH2.volume.value = this.state.hH2Volume;
    hH2Pan.pan.value = this.state.hH2Pan;
    hH2.envelope.attack = this.state.hH2Attack;
    hH2.envelope.decay = this.state.hH2Decay;
    hH2.envelope.release = this.state.hH2Release;
    hH2.frequency.value = this.state.hH2Frequency;
    hH2.resonance = this.state.hH2Resonance;
    hH2.harmonicity = this.state.hH2Harmonicity;
    hH2.triggerAttackRelease("8n");

    hH2Pan = null;
    hH2 = null;
  };

  render() {
    return (
      <div>
        <h1>
          Ocho-Cero-Ocho
          <br />
          <div>
            <button
              style={
                this.state.kickButton
                  ? {
                      backgroundColor: "rgb(23, 62, 67)",
                      outline: 0,
                      color: "whitesmoke",
                      fontWeight: "bold"
                    }
                  : null
              }
              type="button"
              onClick={this.clickHandlerKickButton}
            >
              Kick
            </button>
            <button
              style={
                this.state.snareButton
                  ? { backgroundColor: "rgb(250,229,150)", outline: 0 }
                  : null
              }
              type="button"
              onClick={this.clickHandlerSnareButton}
            >
              Snare
            </button>
            <button
              style={
                this.state.tomButton
                  ? {
                      backgroundColor: "rgb(142, 83, 120)",
                      outline: 0,
                      color: "whitesmoke",
                      fontWeight: "bold"
                    }
                  : null
              }
              type="button"
              onClick={this.clickHandlerTomButton}
            >
              Tom
            </button>
            <button
              style={
                this.state.hh1Button
                  ? {
                      backgroundColor: "rgb(63, 176, 172)",
                      outline: 0
                    }
                  : null
              }
              type="button"
              onClick={this.clickHandlerHh1Button}
            >
              Closed HH
            </button>
            <button
              style={
                this.state.hh2Button
                  ? {
                      backgroundColor: "rgb(158, 225, 186)",
                      outline: 0
                    }
                  : null
              }
              type="button"
              onClick={this.clickHandlerHh2Button}
            >
              Open HH
            </button>
            <div className="mainCont">
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
                      kickVolume={this.state.kickVolume}
                      kickVolumeHandler={this.kickVolumeHandler}
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

              {this.state.tomButton ? (
                <div className="container">
                  <div>
                    <TomEnvelopeContainer
                      tomAttack={this.state.tomAttack}
                      tomAttackHandler={this.tomAttackHandler}
                      ///
                      tomDecay={this.state.tomDecay}
                      tomDecayHandler={this.tomDecayHandler}
                      ///
                      tomSustain={this.state.tomSustain}
                      tomSustainHandler={this.tomSustainHandler}
                      ///
                      tomRelease={this.state.tomRelease}
                      tomReleaseHandler={this.tomReleaseHandler}
                      ///
                      tomHandler={this.tomHandler}
                    />
                  </div>
                  <div>
                    <TomOscControlsContainer
                      tomPitchDecay={this.state.tomPitchDecay}
                      tomPitchDecayHandler={this.tomPitchDecayHandler}
                      tomOscTypeHandler={this.tomOscTypeHandler}
                      tomNote={this.state.tomNote}
                      tomNoteHandler={this.tomNoteHandler}
                      tomVolume={this.state.tomVolume}
                      tomVolumeHandler={this.tomVolumeHandler}
                      tomPan={this.state.tomPan}
                      tomPanHandler={this.tomPanHandler}
                    />
                  </div>
                </div>
              ) : null}

              {this.state.hh1Button ? (
                <div className="container">
                  <div>
                    <Hihat1EnvelopeContainer
                      hH1Attack={this.state.hH1Attack}
                      hH1AttackHandler={this.hH1AttackHandler}
                      ///
                      hH1Decay={this.state.hH1Decay}
                      hH1DecayHandler={this.hH1DecayHandler}
                      ///
                      hH1Release={this.state.hH1Release}
                      hH1ReleaseHandler={this.hH1ReleaseHandler}
                      ///
                      hH1Harmonicity={this.state.hH1Harmonicity}
                      hH1HarmonicityHandler={this.hH1HarmonicityHandler}
                      ///
                      hH1Handler={this.hH1Handler}
                    />
                  </div>
                  <div>
                    <Hh1OscContainer
                      hH1Pan={this.state.hH1Pan}
                      hH1PanHandler={this.hH1PanHandler}
                      hH1Volume={this.state.hH1Volume}
                      hH1VolumeHandler={this.hH1VolumeHandler}
                      hH1Delay={this.state.hH1Delay}
                      hH1DelayHandler={this.hH1DelayHandler}
                      hH1Resonance={this.state.hH1Resonance}
                      hH1ResonanceHandler={this.hH1ResonanceHandler}
                    />
                  </div>
                </div>
              ) : null}

              {this.state.hh2Button ? (
                <div className="container">
                  <div>
                    <Hihat2EnvelopeContainer
                      hH2Attack={this.state.hH2Attack}
                      hH2AttackHandler={this.hH2AttackHandler}
                      ///
                      hH2Decay={this.state.hH2Decay}
                      hH2DecayHandler={this.hH2DecayHandler}
                      ///
                      hH2Release={this.state.hH2Release}
                      hH2ReleaseHandler={this.hH2ReleaseHandler}
                      ///
                      hH2Harmonicity={this.state.hH2Harmonicity}
                      hH2HarmonicityHandler={this.hH2HarmonicityHandler}
                      ///
                      hH2Handler={this.hH2Handler}
                    />
                  </div>
                  <div>
                    <Hh2OscContainer
                      hH2Pan={this.state.hH2Pan}
                      hH2PanHandler={this.hH2PanHandler}
                      hH1Volume={this.state.hH1Volume}
                      hH2VolumeHandler={this.hH2VolumeHandler}
                      hH2Frequency={this.state.hH2Frequency}
                      hH2FrequencyHandler={this.hH2FrequencyHandler}
                      hH2Resonance={this.state.hH2Resonance}
                      hH2ResonanceHandler={this.hH2ResonanceHandler}
                    />
                  </div>
                </div>
              ) : null}

              {/* Default  */}
              {this.state.kickButton === false &&
              this.state.snareButton === false &&
              this.state.tomButton === false &&
              this.state.hh1Button === false &&
              this.state.hh2Button === false ? (
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
                      kickVolume={this.state.kickVolume}
                      kickVolumeHandler={this.kickVolumeHandler}
                    />
                  </div>
                </div>
              ) : null}

              <div className="container">
                <SequencerContainer
                  kickHandler={this.kickHandler}
                  snareHandler={this.snareHandler}
                  tomHandler={this.tomHandler}
                  hH1Handler={this.hH1Handler}
                  hH2Handler={this.hH2Handler}
                />
              </div>
            </div>
          </div>
        </h1>
      </div>
    );
  }
}

export default InstrumentsContainer;
