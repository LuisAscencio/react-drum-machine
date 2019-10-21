import React from "react";
import { Transport } from "tone";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import Step from "./Step";

class StepSequencer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayLength: Array(16).fill(1),
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
    this.index = 0;
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
    let newArray = Array(Math.trunc(val)).fill(1);
    this.setState({
      arrayLength: newArray
    });
    // console.log(newArray);
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
      115: false
    });
    this.setState({
      [this.index + 100]: !this.state[this.index + 100]
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
          {this.state.arrayLength.map((x, i) => {
            return (
              <Step
                key={i}
                clickHandler={this.clickHandler}
                id={i}
                clicked={this.state[i]}
                borderColor={this.state[i + 100]}
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
