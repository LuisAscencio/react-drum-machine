import React from "react";
import { Transport } from "tone";
import InstrumentsContainer from "../containers/InstrumentsContainer";

class Trans extends React.Component {
  constructor(props) {
    super(props);

    Transport.bpm.value = 200;
    // Transport.schedule(this.startLoop, "0");
    // Transport.loop = true;
    // Transport.loopEnd = "4n";
    this.state = {
      // currentBeat: [],
      // beat: 0,
      // tick: 0,
      // time: 0,
      reset: false
    };
  }

  startTransportHandler = () => {
    // let loopBeat = new Loop(this.song, "8n");
    Transport.start("+.2");
    // loopBeat.start(0);
  };
  stopTransportHandler = () => {
    Transport.stop();
  };

  song = time => {
    // console.log("time:", time);
    // let currentBeat = Transport.position.split(":");
    // console.log("current beat", currentBeat);
    // this.setState({
    //   currentBeat: currentBeat,
    //   beat: currentBeat[0],
    //   tick: currentBeat[1],
    //   time: currentBeat[2]
    // });
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
        <button onClick={this.startTransportHandler} type="button">
          Start
        </button>

        <button onClick={this.stopTransportHandler} type="button">
          Stop
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
