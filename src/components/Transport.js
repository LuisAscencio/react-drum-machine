import React from "react";
import { Transport } from "tone";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import InstrumentsContainer from "../containers/InstrumentsContainer";

class Trans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reset: false,
      start: false,
      bpm: 250
      // swing: 0
    };
    this.style = {
      fontSize: "40px",
      borderStyle: "solid",
      borderWidth: "3px",
      outline: 0
    };
    this.colorR = {
      color: "rgb(142, 83, 120)"
    };
    this.colorG = {
      color: "rgb(23, 62, 67)"
    };
    Transport.bpm.value = this.state.bpm;
    // Transport.setLoopPoints(0, "4m");
    // Transport.loop = true;
  }

  bpmHandler = val => {
    this.setState({
      bpm: val
    });
    Transport.bpm.value = this.state.bpm;
  };

  // swingHandler = val => {
  //   this.setState({
  //     swing: val.toFixed(2)
  //   });
  //   console.log(this.state.swing);
  //   Transport.swing = this.state.swing;
  // };

  startTransportHandler = () => {
    Transport.start("+.2");
    this.setState({
      start: true
    });
  };
  stopTransportHandler = () => {
    Transport.stop();
    Transport.clear();
    this.setState({
      start: false
    });
  };

  resetHandler = () => {
    this.setState({
      reset: !this.state.reset
    });
    // console.log(this.state.reset);
  };

  render() {
    return (
      <div>
        <button
          style={this.style}
          onClick={
            this.state.start
              ? this.stopTransportHandler
              : this.startTransportHandler
          }
          type="button"
        >
          {this.state.start ? (
            <i className="fa fa-stop" style={this.colorR}></i>
          ) : (
            <i className="fa fa-play" style={this.colorG}></i>
          )}
        </button>
        <button
          className="wipe"
          onClick={() => {
            document.location.reload();
          }}
        >
          Wipe
        </button>
        <br />
        <br />

        <div>
          <Knob
            skin={skins.s16}
            unlockDistance={30}
            onChange={this.bpmHandler}
            min={100}
            max={300}
            clampMax={180}
            rotateDegrees={270}
            value={this.state.bpm}
          />
          <small className="knobTempo">BPM</small>
        </div>

        {/* <small className="knobText">
          BMP {`${Math.trunc(this.state.bpm)}`}
        </small> */}
        {/* <Knob
          skin={skins.s16}
          unlockDistance={30}
          onChange={this.swingHandler}
          min={0}
          max={1}
          clampMax={180}
          rotateDegrees={270}
          value={this.state.swing}
        />
        <small className="knobText">Swing {`${this.state.swing} %`}</small> */}
        <div>
          {/* {`${this.state.beat}`}: {`${this.state.tick}`}:{" "}
          {`${Math.trunc(parseInt(this.state.time))}`} */}
        </div>
        <InstrumentsContainer />
        {/* time={this.state.currentBeat}  */}
        <br />
        <br />
        {/* <button
          className="wipe"
          
          onClick={() => {
            document.location.reload();
          }}
        >
          Wipe
        </button> */}
      </div>
    );
  }
}

export default Trans;
