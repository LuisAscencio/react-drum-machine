import React from "react";
// import Kick from "../components/Kick";
import StepSequencer from "../components/StepSequencer";

class SequencerContainer extends React.Component {
  state = {
    mouse: false
  };

  mouseChangeDown = () => {
    this.setState({
      mouse: true
    });
    console.log(this.state.mouse);
  };
  mouseChangeUp = () => {
    this.setState({
      mouse: false
    });
    console.log(this.state.mouse);
  };
  triggerChildReset = () => {
    this.refs.child1.resetHandler();
    this.refs.child2.resetHandler();
  };
  render() {
    return (
      <div onMouseDown={this.mouseChangeDown} onMouseUp={this.mouseChangeUp}>
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
          mouse={this.state.mouse}
        />

        {/* Snare sequencer */}
        <StepSequencer
          triggerHandler={this.props.snareHandler}
          time={this.props.time}
          ref="child2"
          color={"3px solid rgb(240, 178, 8)"}
          mouse={this.state.mouse}
        />
      </div>
    );
  }
}

export default SequencerContainer;
