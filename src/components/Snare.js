import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class Snare extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.knobs === "envelope" ? (
          <div>
            {/* Attack Knob:: */}

            <div className="knob">
              <small className="knobText">Attack</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.snareAttackHandler}
                min={0.0}
                max={0.05}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.snareAttack}
              />
            </div>

            {/* Decay Knob:: */}
            <div className="knob">
              <small className="knobText">Decay</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.snareDecayHandler}
                min={0}
                max={0.3}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.snareDecay}
              />
            </div>
            {/* Sustain Knob:: */}
            <div className="knob">
              <small className="knobText">Sustain</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.snareSustainHandler}
                min={0.0}
                max={0.1}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.snareSustain}
              />
            </div>
          </div>
        ) : null}

        {this.props.knobs === "noise" ? (
          <div>
            {/* Volume Knob:: */}

            <div className="knob">
              <small className="knobText">Volume</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.snareVolHandler}
                min={-10}
                max={10}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.snareVolume}
              />
            </div>

            {/* Noise type menu */}
            <div>
              <select
                defaultValue="brown"
                className="custom-select"
                onChange={this.props.snareNoiseTypeHandler}
              >
                <option value="white">white</option>
                <option value="pink">pink</option>
                <option value="brown">brown</option>
              </select>
            </div>

            {/* Pan Knob::*/}

            <div className="knob">
              <small className="knobText">Pan</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.snarePanHandler}
                min={-1}
                max={1}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.snarePan}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Snare;
