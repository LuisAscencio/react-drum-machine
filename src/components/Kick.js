import React from "react";
// import Tone from "tone";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class Kick extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <button type="button" onClick={this.props.kickHandler}>
          Kick
        </button> */}

        {this.props.knobs === "envelope" ? (
          <div>
            {/* Attack Knob:: */}

            <div className="knob">
              <small className="knobText">Attack</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.kickAttackHandler}
                min={0.0}
                max={0.09}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.kickAttack}
              />
            </div>

            {/* Decay Knob:: */}
            <div className="knob">
              <small className="knobText">Decay</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.kickDecayHandler}
                min={0}
                max={1}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.kickDecay}
              />
            </div>
            {/* Sustain Knob:: */}
            <div className="knob">
              <small className="knobText">Sustain</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.kickSustainHandler}
                min={0.0}
                max={0.5}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.kickSustain}
              />
            </div>

            {/* Release Knob:: */}
            <div className="knob">
              <small className="knobText">Release</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.kickReleaseHandler}
                min={0.0}
                max={2}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.kickRelease}
              />
            </div>
          </div>
        ) : null}

        {this.props.knobs === "osc" ? (
          <div>
            {/* Pitch Decay Knob:: */}

            <div className="knob">
              <small className="knobText">P Decay</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.kickPitchDecayHandler}
                min={0.0}
                max={0.6}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.kickPitchDecay}
              />
            </div>

            {/* Oscillator type menu */}
            <div>
              <select className="knob" onChange={this.props.kickOscTypeHandler}>
                <option value="sine">sine</option>
                <option value="square">square</option>
                <option value="triangle">triangle</option>
                <option value="sawtooth">sawtooth</option>
              </select>
            </div>

            {/* Note Knob::*/}

            <div className="knob">
              <small className="knobText">Frequency</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.kickNoteHandler}
                min={30}
                max={120}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.kickNote}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Kick;
