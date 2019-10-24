import React from "react";
import Firebase from "../Firebase";
import StepSequencer from "../components/StepSequencer";

class SequencerContainer extends React.Component {
  state = {
    mouse: false,
    sequenceName: "",
    displayName: ""
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

  saveChildSequence = () => {
    this.refs.child1.saveSequence();
    this.refs.child2.saveSequence();
    this.refs.child3.saveSequence();
    this.refs.child4.saveSequence();
    this.refs.child5.saveSequence();
    this.setState({
      sequenceName: ""
    });
  };

  loadChildSequence = e => {
    let name = e.target.nextElementSibling.value;

    this.refs.child1.loadSequence(name);
    this.refs.child2.loadSequence(name);
    this.refs.child3.loadSequence(name);
    this.refs.child4.loadSequence(name);
    this.refs.child5.loadSequence(name);
    this.setState({
      displayName: name
    });
  };

  inputChangeHandler = e => {
    this.setState({
      sequenceName: e.target.value
    });
  };

  componentDidMount() {
    Firebase.firestore()
      .collection("Kick sequencer")
      .onSnapshot(snapShot => {
        const newSequences = snapShot.docs.map(doc => {
          return doc.id;
        });

        this.setState({
          savedSequences: newSequences
        });
        console.log(this.state.savedSequences);
      });
  }

  render() {
    // console.log("rendering");
    return (
      <div
        className="seq"
        onMouseDown={this.mouseChangeDown}
        onMouseUp={this.mouseChangeUp}
      >
        <div className="seqControls">
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
          <form style={{ display: "inline-block" }}>
            <button
              onClick={this.saveChildSequence}
              className="seqReset"
              type="button"
              style={{
                backgroundColor: "#CBCBCB",
                borderRadius: "3px",

                padding: "5px 5px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "14px",
                margin: "4px 8px",

                cursor: "pointer",
                outline: 0
              }}
              // onClick={e => {
              //   props.savePreset(e);
              // }}
            >
              Save
            </button>
            <input
              onChange={this.inputChangeHandler}
              style={{ borderRadius: "7px" }}
              type="text"
              name="preset"
              placeholder="Sequence name"
              value={this.state.sequenceName}
            ></input>
          </form>

          <form style={{ display: "inline-block" }}>
            <button
              onClick={this.loadChildSequence}
              className="seqReset"
              // onClick={this.triggerChildReset}
              type="button"
              style={{
                backgroundColor: "#CBCBCB",
                borderRadius: "3px",
                // border: "none",
                // color: "black",
                padding: "5px 5px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "14px",
                margin: "4px 8px",

                cursor: "pointer",
                outline: 0
              }}
              // onClick={props.loadPreset}
            >
              Load
            </button>
            <select id="select" className="custom-select">
              {this.state.savedSequences
                ? this.state.savedSequences.map((sequence, index) => (
                    <option key={index + 2} value={sequence}>
                      {sequence}
                    </option>
                  ))
                : null}
            </select>
          </form>

          <div
            style={{
              // padding: "5px 5px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "30px",
              marginLeft: "10px",
              fontFamily: "Bungee Shade"
            }}
          >
            {this.state.displayName}
          </div>
        </div>

        <div className="seqBox">
          {/* Kick sequencer */}
          <StepSequencer
            triggerHandler={this.props.kickHandler}
            ref="child1"
            sequencer="Kick sequencer"
            color={"4px solid rgb(23, 62, 67)"}
            mouse={this.state.mouse}
            sequenceName={this.state.sequenceName}
          />

          {/* Snare sequencer */}
          <StepSequencer
            triggerHandler={this.props.snareHandler}
            ref="child2"
            sequencer="Snare sequencer"
            color={"4px solid rgb(250, 229, 150)"}
            mouse={this.state.mouse}
            sequenceName={this.state.sequenceName}
          />
          {/* Tom sequencer */}
          <StepSequencer
            triggerHandler={this.props.tomHandler}
            ref="child3"
            sequencer="Tom sequencer"
            color={"4px solid rgb(142, 83, 120)"}
            mouse={this.state.mouse}
            sequenceName={this.state.sequenceName}
          />

          {/* Hh1 sequencer */}
          <StepSequencer
            triggerHandler={this.props.hH1Handler}
            ref="child4"
            sequencer="Hh1 sequencer"
            color={"4px solid rgb(63, 176, 172)"}
            mouse={this.state.mouse}
            sequenceName={this.state.sequenceName}
          />

          {/* Hh2 sequencer */}
          <StepSequencer
            triggerHandler={this.props.hH2Handler}
            ref="child5"
            sequencer="Hh2 sequencer"
            color={"4px solid rgb(158, 225, 186)"}
            mouse={this.state.mouse}
            sequenceName={this.state.sequenceName}
          />
        </div>
      </div>
    );
  }
}

export default SequencerContainer;
