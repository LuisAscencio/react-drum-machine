import React from "react";

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
              <small className="fontColor">Attack</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.kickAttackHandler}
                min={0.0}
                max={0.09}
                clampMax={180}
                rotateDegrees={270}
                defaultValue={0.001}
              />
            </div>

            {/* Decay Knob:: */}
            <div className="knob">
              <small className="fontColor">Decay</small>
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
              <small className="fontColor">Sustain</small>
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
              <small className="fontColor">Release</small>
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
              <small className="fontColor">P Decay</small>
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
              <select
                className="custom-select"
                onChange={this.props.kickOscTypeHandler}
              >
                <option value="sine">sine</option>
                <option value="square">square</option>
                <option value="triangle">triangle</option>
                <option value="sawtooth">sawtooth</option>
              </select>
            </div>

            {/* Note Knob::*/}

            <div className="knob">
              <small className="fontColor">Frequency</small>
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

            {/* Volume Knob::*/}

            <div className="knob">
              <small className="fontColor">Volume</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.kickVolumeHandler}
                min={-50}
                max={10}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.kickVolume}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Kick;
