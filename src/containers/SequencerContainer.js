import React from "react";
import Kick from "../components/Kick";
import StepSequencer from "../components/StepSequencer";

class SequencerContainer extends React.Component {
  state = {};

  triggerChildReset = () => {
    this.refs.child1.resetHandler();
    this.refs.child2.resetHandler();
  };
  render() {
    return (
      <div>
        <br />
        <button onClick={this.triggerChildReset} type="button">
          Reset Sequence
        </button>
        {/* Kick sequencer */}
        <StepSequencer
          triggerHandler={this.props.kickHandler}
          time={this.props.time}
          ref="child1"
          color={"3px solid rgb(212, 45, 87)"}
        />

        {/* Snare sequencer */}
        <StepSequencer
          triggerHandler={this.props.snareHandler}
          time={this.props.time}
          ref="child2"
          color={"3px solid rgb(240, 178, 8)"}
        />
      </div>
    );
  }
}

export default SequencerContainer;
