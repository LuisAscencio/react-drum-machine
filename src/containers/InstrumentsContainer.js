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
import PresetContainer from "./PresetContainer";
import SequencerContainer from "./SequencerContainer";
import Firebase from "../Firebase";

class InstrumentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kickButton: false,
      snareButton: false,
      hh1Button: false,
      hh2Button: false,
      tomButton: false,
      presetName: "",
      newPresetName: "808?",
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
      hH2Volume: -20,
      hH2Attack: 0.05,
      hH2Decay: 0.1,
      hH2Release: 0.1,
      hH2Frequency: 400,
      hH2Resonance: 4000,
      hH2Harmonicity: 1.1
    };
    // window.kickAttack = 0.001;

    // this.kickContainer = {};
    // this.snareContainer = {};
    // this.hH1Container = {};
    // this.hH2Container = {};
    // this.tomContainer = {};
  }

  /// Sound settings methods:::
  clickHandlerKickButton = e => {
    this.setState({
      kickButton: true,
      snareButton: false,
      hh1Button: false,
      hh2Button: false,
      tomButton: false
    });
  };

  clickHandlerSnareButton = e => {
    this.setState({
      snareButton: true,
      kickButton: false,
      hh1Button: false,
      hh2Button: false,
      tomButton: false
    });
  };

  clickHandlerTomButton = e => {
    this.setState({
      tomButton: true,
      snareButton: false,
      kickButton: false,
      hh1Button: false,
      hh2Button: false
    });
  };
  clickHandlerHh1Button = e => {
    this.setState({
      hh1Button: true,
      kickButton: false,
      snareButton: false,
      hh2Button: false,
      tomButton: false
    });
  };

  clickHandlerHh2Button = e => {
    this.setState({
      hh2Button: true,
      kickButton: false,
      snareButton: false,
      hh1Button: false,
      tomButton: false
    });
  };

  handleKeyPress = e => {
    switch (e.key) {
      case "1":
        this.kickHandler();
        break;

      case "2":
        this.snareHandler();
        break;

      case "3":
        this.tomHandler();
        break;

      case "4":
        this.hH1Handler();
        break;

      case "5":
        this.hH2Handler();
        break;

      default:
        console.log("nada!");
    }
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

  savePreset = e => {
    Firebase.firestore()
      .collection("preset")
      .add({
        presetName: this.state.presetName,

        ///Kick params:::
        kickAttack: this.state.kickAttack,
        kickDecay: this.state.kickDecay,
        kickSustain: this.state.kickSustain,
        kickRelease: this.state.kickRelease,
        kickPitchDecay: this.state.kickPitchDecay,
        KickOscType: this.state.KickOscType,
        kickNote: this.state.kickNote,
        kickVolume: this.state.kickVolume,

        ///Tom params:::
        tomAttack: this.state.tomAttack,
        tomDecay: this.state.tomDecay,
        tomSustain: this.state.tomSustain,
        tomRelease: this.state.tomRelease,
        tomPitchDecay: this.state.tomPitchDecay,
        tomOscType: this.state.tomOscType,
        tomNote: this.state.tomNote,
        tomVolume: this.state.tomVolume,
        tomPan: this.state.tomPan,

        ////Snare params::
        snarePan: this.state.snarePan,
        snareVolume: this.state.snareVolume,
        snareAttack: this.state.snareAttack,
        snareDecay: this.state.snareDecay,
        snareSustain: this.state.snareSustain,
        snareNoiseType: this.state.snareNoiseType,

        /// Hihat1 params:::
        hH1Pan: this.state.hH1Pan,
        hH1Volume: this.state.hH1Volume,
        hH1Attack: this.state.hH1Attack,
        hH1Decay: this.state.hH1Decay,
        hH1Release: this.state.hH1Release,
        hH1Delay: this.state.hH1Delay,
        hH1Resonance: this.state.hH1Resonance,
        hH1Harmonicity: this.state.hH1Harmonicity,

        /// Hihat2 params:::
        hH2Pan: this.state.hH2Pan,
        hH2Volume: this.state.hH2Volume,
        hH2Attack: this.state.hH2Attack,
        hH2Decay: this.state.hH2Decay,
        hH2Release: this.state.hH2Release,
        hH2Frequency: this.state.hH2Frequency,
        hH2Resonance: this.state.hH2Resonance,
        hH2Harmonicity: this.state.hH2Harmonicity
      });
    this.setState({
      presetName: ""
    });
  };

  loadPreset = e => {
    Firebase.firestore()
      .collection("preset")
      .doc(`${e.target.nextSibling.value}`)
      .get()
      .then(doc => {
        console.log(doc.data());
        let data = doc.data();
        console.log(data.kickAttack);

        this.setState({
          newPresetName: data.presetName,
          kickAttack: data.kickAttack,
          kickDecay: data.kickDecay,
          kickSustain: data.kickSustain,
          kickRelease: data.kickRelease,
          kickPitchDecay: data.kickPitchDecay,
          KickOscType: data.KickOscType,
          kickNote: data.kickNote,
          kickVolume: data.kickVolume,

          ///Tom params:::
          tomAttack: data.tomAttack,
          tomDecay: data.tomDecay,
          tomSustain: data.tomSustain,
          tomRelease: data.tomRelease,
          tomPitchDecay: data.tomPitchDecay,
          tomOscType: data.tomOscType,
          tomNote: data.tomNote,
          tomVolume: data.tomVolume,
          tomPan: data.tomPan,

          ////Snare params::
          snarePan: data.snarePan,
          snareVolume: data.snareVolume,
          snareAttack: data.snareAttack,
          snareDecay: data.snareDecay,
          snareSustain: data.snareSustain,
          snareNoiseType: data.snareNoiseType,

          /// Hihat1 params:::
          hH1Pan: data.hH1Pan,
          hH1Volume: data.hH1Volume,
          hH1Attack: data.hH1Attack,
          hH1Decay: data.hH1Decay,
          hH1Release: data.hH1Release,
          hH1Delay: data.hH1Delay,
          hH1Resonance: data.hH1Resonance,
          hH1Harmonicity: data.hH1Harmonicity,

          /// Hihat2 params:::
          hH2Pan: data.hH2Pan,
          hH2Volume: data.hH2Volume,
          hH2Attack: data.hH2Attack,
          hH2Decay: data.hH2Decay,
          hH2Release: data.hH2Release,
          hH2Frequency: data.hH2Frequency,
          hH2Resonance: data.hH2Resonance,
          hH2Harmonicity: data.hH2Harmonicity
        });
      });
  };

  inputChangeHandler = e => {
    this.setState({
      presetName: e.target.value
    });
  };

  ///Triggers:::

  kickHandler = () => {
    window.kick = new Tone.MembraneSynth().toMaster();
    /// Envelope params::

    window.kick.envelope.attack = this.state.kickAttack;
    window.kick.envelope.decay = this.state.kickDecay;
    window.kick.envelope.sustain = this.state.kickSustain;
    window.kick.envelope.release = this.state.kickRelease;
    // /// Osc params:::
    window.kick.pitchDecay = this.state.kickPitchDecay;
    window.kick.oscillator.type = this.state.KickOscType;
    window.kick.volume.value = this.state.kickVolume;

    ///Convert freq to note:::
    window.frequency = this.state.kickNote;

    window.noteOrder = "G# A A# B C C# D D# E F F# G".split(" ");
    window.n = Math.round(
      49 + (12 * Math.log(window.frequency / 440)) / Math.log(2)
    );
    window.note = window.noteOrder[window.n % window.noteOrder.length];
    window.index = Math.ceil((window.n - 3) / window.noteOrder.length);

    window.foundNote = window.note + window.index;

    // console.log(foundNote);
    window.kick.triggerAttackRelease(window.foundNote, "8n");
    delete window.kick;
    delete window.frequency;

    delete window.noteOrder;
    delete window.n;
    delete window.note;
    delete window.index;
    delete window.foundNote;
  };

  snareHandler = () => {
    window.snarePan = new Tone.Panner({}).toMaster();

    window.snare = new Tone.NoiseSynth({}).connect(window.snarePan);

    // this.kickContainer.snare.volume.value = this.state.snareVolume;
    window.snarePan.pan.value = this.state.snarePan;
    window.snare.noise.type = this.state.snareNoiseType;
    window.snare.envelope.attack = this.state.snareAttack;
    window.snare.envelope.decay = this.state.snareDecay;
    window.snare.envelope.sustain = this.state.snareSustain;
    window.snare.triggerAttackRelease("8n");
    delete window.snarePan;
    delete window.snare;
  };

  tomHandler = () => {
    window.tomPan = new Tone.Panner({}).toMaster();
    window.tom = new Tone.MembraneSynth().connect(window.tomPan);
    /// Envelope params::

    window.tom.envelope.attack = this.state.tomAttack;
    window.tom.envelope.decay = this.state.tomDecay;
    window.tom.envelope.sustain = this.state.tomSustain;
    window.tom.envelope.release = this.state.tomRelease;
    // /// Osc params:::
    window.tom.pitchDecay = this.state.tomPitchDecay;
    window.tom.oscillator.type = this.state.tomOscType;
    window.tom.volume.value = this.state.tomVolume;
    window.tomPan.pan.value = this.state.tomPan;

    ///Convert freq to note:::
    window.tomFrequency = this.state.tomNote;

    window.tomNoteOrder = "G# A A# B C C# D D# E F F# G".split(" ");
    window.tomN = Math.round(
      49 + (12 * Math.log(window.tomFrequency / 440)) / Math.log(2)
    );
    window.tomNote =
      window.tomNoteOrder[window.tomN % window.tomNoteOrder.length];
    window.tomIndex = Math.ceil((window.tomN - 3) / window.tomNoteOrder.length);

    window.tomFoundNote = window.tomNote + window.tomIndex;

    // console.log(foundNote);
    // debugger;
    window.tom.triggerAttackRelease(window.tomFoundNote, "8n");

    delete window.tomPan;
    delete window.tom;
    delete window.tomFrequency;
    delete window.tomNoteOrder;
    delete window.tomN;
    delete window.tomNote;
    delete window.tomIndex;
    delete window.tomFoundNote;
  };

  hH1Handler = () => {
    window.hH1Pan = new Tone.Panner({}).toMaster();
    window.pinPong = new Tone.PingPongDelay({}).connect(window.hH1Pan);

    window.hH1 = new Tone.MetalSynth({}).connect(window.pinPong);
    window.hH1.volume.value = this.state.hH1Volume;
    window.hH1Pan.pan.value = this.state.hH1Pan;
    window.hH1.envelope.attack = this.state.hH1Attack;
    window.hH1.envelope.decay = this.state.hH1Decay;
    window.hH1.envelope.release = this.state.hH1Release;
    window.pinPong.wet.value = this.state.hH1Delay;
    window.hH1.resonance = this.state.hH1Resonance;
    window.hH1.harmonicity = this.state.hH1Harmonicity;
    window.hH1.triggerAttackRelease("8n");

    delete window.hH1Pan;
    delete window.pinPong;
    delete window.hH1;
  };

  hH2Handler = () => {
    window.hH2Pan = new Tone.Panner({}).toMaster();

    window.hH2 = new Tone.MetalSynth({}).connect(window.hH2Pan);
    window.hH2.volume.value = this.state.hH2Volume;
    window.hH2Pan.pan.value = this.state.hH2Pan;
    window.hH2.envelope.attack = this.state.hH2Attack;
    window.hH2.envelope.decay = this.state.hH2Decay;
    window.hH2.envelope.release = this.state.hH2Release;
    window.hH2.frequency.value = this.state.hH2Frequency;
    window.hH2.resonance = this.state.hH2Resonance;
    window.hH2.harmonicity = this.state.hH2Harmonicity;
    window.hH2.triggerAttackRelease("8n");

    delete window.hH2Pan;
    delete window.hH2;
  };

  render() {
    return (
      <div onKeyPress={this.handleKeyPress}>
        <h1>
          <div
            style={{
              marginBottom: "-47px",
              fontFamily: "Bungee Shade",
              fontSize: "40px"
            }}
          >
            {this.state.newPresetName}
          </div>

          <br />
          <div>
            <button
              style={
                this.state.kickButton
                  ? {
                      backgroundColor: "rgb(23, 62, 67)",
                      outline: 0,
                      color: "whitesmoke",
                      fontWeight: "bold",
                      border: "none",
                      padding: "5px 5px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "16px",
                      margin: "4px 2px",
                      cursor: "pointer",
                      borderRadius: "5px"
                    }
                  : {
                      backgroundColor: "#CBCBCB",
                      border: "none",

                      color: "black",
                      padding: "5px 5px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "16px",
                      margin: "4px 2px",
                      cursor: "pointer",
                      outline: 0,
                      borderRadius: "5px"
                    }
              }
              type="button"
              onClick={this.clickHandlerKickButton}
            >
              Kick
            </button>
            <button
              style={
                this.state.snareButton
                  ? {
                      backgroundColor: "rgb(250,229,150)",
                      border: "none",
                      color: "black",
                      fontWeight: "bold",
                      padding: "5px 5px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "16px",
                      margin: "4px 2px",
                      cursor: "pointer",
                      outline: 0,
                      borderRadius: "5px"
                    }
                  : {
                      backgroundColor: "#CBCBCB",
                      border: "none",
                      color: "black",
                      padding: "5px 5px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "16px",
                      margin: "4px 2px",
                      cursor: "pointer",
                      outline: 0,
                      borderRadius: "5px"
                    }
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
                      fontWeight: "bold",
                      border: "none",
                      padding: "5px 5px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "16px",
                      margin: "4px 2px",
                      cursor: "pointer",
                      borderRadius: "5px"
                    }
                  : {
                      backgroundColor: "#CBCBCB",
                      border: "none",
                      color: "black",
                      padding: "5px 5px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "16px",
                      margin: "4px 2px",
                      cursor: "pointer",
                      outline: 0,
                      borderRadius: "5px"
                    }
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
                      border: "none",
                      color: "black",
                      fontWeight: "bold",
                      padding: "5px 5px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "16px",
                      margin: "4px 2px",
                      cursor: "pointer",
                      outline: 0,
                      borderRadius: "5px"
                    }
                  : {
                      backgroundColor: "#CBCBCB",
                      border: "none",
                      color: "black",
                      padding: "5px 5px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "16px",
                      margin: "4px 2px",
                      cursor: "pointer",
                      outline: 0,
                      borderRadius: "5px"
                    }
              }
              type="button"
              onClick={this.clickHandlerHh1Button}
            >
              Hi hat
            </button>
            <button
              style={
                this.state.hh2Button
                  ? {
                      backgroundColor: "rgb(158, 225, 186)",
                      border: "none",
                      color: "black",
                      fontWeight: "bold",
                      padding: "5px 5px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "16px",
                      margin: "4px 2px",
                      cursor: "pointer",
                      outline: 0,
                      borderRadius: "5px"
                    }
                  : {
                      backgroundColor: "#CBCBCB",
                      border: "none",
                      color: "black",
                      padding: "5px 5px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "16px",
                      margin: "4px 2px",
                      cursor: "pointer",
                      outline: 0,
                      borderRadius: "5px"
                    }
              }
              type="button"
              onClick={this.clickHandlerHh2Button}
            >
              Cymbal
            </button>
            <div className="mainCont" onKeyPress={this.handleKeyPress}>
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
                      // kickHandler={this.kickHandler}
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
                      // snareHandler={this.snareHandler}
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
                      // tomHandler={this.tomHandler}
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
                      // hH1Handler={this.hH1Handler}
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
                      // hH2Handler={this.hH2Handler}
                    />
                  </div>
                  <div>
                    <Hh2OscContainer
                      hH2Pan={this.state.hH2Pan}
                      hH2PanHandler={this.hH2PanHandler}
                      hH1Volume={this.state.hH2Volume}
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
                      // kickHandler={this.kickHandler}
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
          <div className="presetCard">
            <PresetContainer
              inputChangeHandler={this.inputChangeHandler}
              savePreset={this.savePreset}
              presetName={this.state.presetName}
              loadPreset={this.loadPreset}
            />
          </div>
        </h1>
      </div>
    );
  }
}

export default InstrumentsContainer;
