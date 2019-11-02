import React from "react";
import { Transport } from "tone";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import Step from "./Step";
import Firebase from "../Firebase";

class StepSequencer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // arrayLength: Array(16).fill(1),
      val: 16,

      /// Background:::
      100: false,
      101: false,
      102: false,
      103: false,
      104: false,
      105: false,
      106: false,
      107: false,
      108: false,
      109: false,
      110: false,
      111: false,
      112: false,
      113: false,
      114: false,
      115: false,

      ///Clicked:::
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false
    };

    Transport.scheduleRepeat(this.checkStep, "8n");
    this.index = 0;

    this.count = 15;
  }

  resetHandler = () => {
    // this.setState({
    //   [this.index + 99]: false
    // });
    this.index = 0;
  };

  saveSequence = () => {
    // console.log(this.state[0]);
    // console.log(this.props.sequencer);
    // debugger;
    Firebase.firestore()
      .collection(`${this.props.sequencer}`)
      .doc(`${this.props.sequenceName}`)
      .set({
        count: this.count,
        sequenceName: this.props.sequenceName,
        val: this.state.val,
        0: this.state[0],
        1: this.state[1],
        2: this.state[2],
        3: this.state[3],
        4: this.state[4],
        5: this.state[5],
        6: this.state[6],
        7: this.state[7],
        8: this.state[8],
        9: this.state[9],
        10: this.state[10],
        11: this.state[11],
        12: this.state[12],
        13: this.state[13],
        14: this.state[14],
        15: this.state[15]
      });
  };

  loadSequence = name => {
    Firebase.firestore()
      .collection(`${this.props.sequencer}`)
      .doc(`${name}`)
      .get()
      .then(doc => {
        // console.log(doc.data());
        let data = doc.data();
        // console.log(data[0]);
        // debugger;
        this.setState({
          0: data[0],
          1: data[1],
          2: data[2],
          3: data[3],
          4: data[4],
          5: data[5],
          6: data[6],
          7: data[7],
          8: data[8],
          9: data[9],
          10: data[10],
          11: data[11],
          12: data[12],
          13: data[13],
          14: data[14],
          15: data[15],
          val: data.val
        });
        this.count = data.count;
        this.index = 0;
      });
  };
  ///Steps changes:::
  clickHandler = e => {
    // console.log(e.target.dataset.id);
    let newVal = e.target.dataset.id;
    this.setState({
      [newVal]: !this.state[newVal]
    });

    // console.log(this.state);
  };

  stepHandler = val => {
    // console.log(Math.trunc(val));
    this.setState({ val: Math.trunc(val) });
    // console.log(this.state.val);
    this.count = Math.trunc(val) - 1;
    // let newArray = Array(Math.trunc(val)).fill(1);
    // this.setState({
    //   arrayLength: newArray
    // });
    // console.log(newArray);

    // this.setState({
    //   [this.count + 99]: false,
    //   [this.count + 100]: false,
    //   [this.count + 101]: false,
    //   [this.count + 102]: false,
    //   [this.count + 103]: false,
    //   [this.count + 104]: false
    // });
  };

  checkStep = () => {
    this.setState({
      100: false,
      101: false,
      102: false,
      103: false,
      104: false,
      105: false,
      106: false,
      107: false,
      108: false,
      109: false,
      110: false,
      111: false,
      112: false,
      113: false,
      114: false,
      115: false,

      [this.index + 100]: true
    });
    if (this.state[this.index] === true) {
      this.props.triggerHandler();
    }

    if (this.index < this.count) {
      this.index++;
    } else if (this.index === this.count) {
      this.index = 0;
    } else {
      this.index = this.index - this.count;
    }
  };

  render() {
    return (
      <div>
        <div
          style={{
            flex: 1,
            flexDirection: "row",
            width: "890px",
            borderRadius: "5px",
            padding: "6px",
            margin: "5px",
            border: `${this.props.color}`
          }}
        >
          <div
            className="knob"
            style={{
              marginRight: "10px",
              display: "inline-block"
            }}
          >
            <small className="knobText">Steps</small>
            <Knob
              skin={skins.s16}
              unlockDistance={30}
              onChange={this.stepHandler}
              min={1}
              max={16}
              clampMax={180}
              rotateDegrees={270}
              value={this.state.val}
            />
          </div>
          {Array(Math.trunc(this.state.val))
            .fill(1)
            .map((x, i) => {
              return (
                <Step
                  count={this.state.count}
                  key={i}
                  clickHandler={this.clickHandler}
                  id={i}
                  clicked={this.state[i]}
                  borderColor={this.state[i + 100]}
                  bC={this.props.bC}
                  color={this.props.color}
                  mouse={this.props.mouse}
                  mouseChangeDown={this.props.mouseChangeDown}
                  mouseChangeUp={this.props.mouseChangeUp}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default StepSequencer;
