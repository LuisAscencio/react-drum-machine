import React from "react";

import StepSequencer from "../components/StepSequencer";

class SequencerContainer extends React.Component {
  state = {
    mouse: false
  };

  mouseChangeDown = () => {
    this.setState({
      mouse: true
    });
    // console.log(this.state.mouse);
  };
  mouseChangeUp = () => {
    this.setState({
      mouse: false
    });
    // console.log(this.state.mouse);
  };
  triggerChildReset = () => {
    this.refs.child1.resetHandler();
    this.refs.child2.resetHandler();
    this.refs.child3.resetHandler();
    this.refs.child4.resetHandler();
    this.refs.child5.resetHandler();
  };
  render() {
    return (
      <div
        className="seq"
        onMouseDown={this.mouseChangeDown}
        onMouseUp={this.mouseChangeUp}
      >
        <button
          className="seqReset"
          onClick={this.triggerChildReset}
          type="button"
          style={{
            backgroundColor: "#CBCBCB",
            borderRadius: "5px",
            // border: "none",
            // color: "black",
            padding: "5px 5px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 8px",

            cursor: "pointer",
            outline: 0
          }}
        >
          Reset
        </button>
        <div className="seqBox">
          {/* Kick sequencer */}
          <StepSequencer
            triggerHandler={this.props.kickHandler}
            ref="child1"
            color={"4px solid rgb(23, 62, 67)"}
            mouse={this.state.mouse}
          />

          {/* Snare sequencer */}
          <StepSequencer
            triggerHandler={this.props.snareHandler}
            ref="child2"
            color={"4px solid rgb(250, 229, 150)"}
            mouse={this.state.mouse}
          />
          {/* Tom sequencer */}
          <StepSequencer
            triggerHandler={this.props.tomHandler}
            ref="child3"
            color={"4px solid rgb(142, 83, 120)"}
            mouse={this.state.mouse}
          />

          {/* Hh1 sequencer */}
          <StepSequencer
            triggerHandler={this.props.hH1Handler}
            ref="child4"
            color={"4px solid rgb(63, 176, 172)"}
            mouse={this.state.mouse}
          />

          {/* Hh2 sequencer */}
          <StepSequencer
            triggerHandler={this.props.hH2Handler}
            ref="child5"
            color={"4px solid rgb(158, 225, 186)"}
            mouse={this.state.mouse}
          />
        </div>
      </div>
    );
  }
}

export default SequencerContainer;
