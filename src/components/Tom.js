import React from "react";

import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class Tom extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props !== nextProps) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <div className="App">
        {this.props.knobs === "envelope" ? (
          <div>
            {/* Attack Knob:: */}

            <div className="knob">
              <small className="fontColor">Attack</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.tomAttackHandler}
                min={0.0}
                max={0.09}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.tomAttack}
              />
            </div>

            {/* Decay Knob:: */}
            <div className="knob">
              <small className="fontColor">Decay</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.tomDecayHandler}
                min={0}
                max={1}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.tomDecay}
              />
            </div>
            {/* Sustain Knob:: */}
            <div className="knob">
              <small className="fontColor">Sustain</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.tomSustainHandler}
                min={0.0}
                max={0.5}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.tomSustain}
              />
            </div>

            {/* Release Knob:: */}
            <div className="knob">
              <small className="fontColor">Release</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.tomReleaseHandler}
                min={0.0}
                max={2}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.tomRelease}
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
                onChange={this.props.tomPitchDecayHandler}
                min={0.0}
                max={0.6}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.tomPitchDecay}
              />
            </div>

            {/* Oscillator type menu */}
            <div>
              <select
                value={`${this.props.tomOscType}`}
                className="custom-select"
                onChange={this.props.tomOscTypeHandler}
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
                onChange={this.props.tomNoteHandler}
                min={30}
                max={120}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.tomNote}
              />
            </div>

            {/* Volume Knob::*/}

            <div className="knob">
              <small className="fontColor">Volume</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.tomVolumeHandler}
                min={-30}
                max={3}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.tomVolume}
              />
            </div>
            {/* Pan Knob::*/}

            <div className="knob">
              <small className="fontColor">pan</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.tomPanHandler}
                min={-1}
                max={1}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.tomPan}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Tom;
