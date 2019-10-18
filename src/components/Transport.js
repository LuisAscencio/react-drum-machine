import React from "react";
import { Transport } from "tone";
import InstrumentsContainer from "../containers/InstrumentsContainer";

class Trans extends React.Component {
  constructor(props) {
    super(props);

    Transport.bpm.value = 200;

    this.state = {
      reset: false,
      start: false
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
  }

  startTransportHandler = () => {
    Transport.start("+.3");
    this.setState({
      start: true
    });
  };
  stopTransportHandler = () => {
    Transport.stop();
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

        <div>
          {/* {`${this.state.beat}`}: {`${this.state.tick}`}:{" "}
          {`${Math.trunc(parseInt(this.state.time))}`} */}
        </div>
        <InstrumentsContainer />
        {/* time={this.state.currentBeat}  */}
        <br />
        <br />
      </div>
    );
  }
}

export default Trans;
