import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class Hihat2 extends React.Component {
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
                onChange={this.props.hH2AttackHandler}
                min={0.0}
                max={0.09}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH2Attack}
              />
            </div>

            {/* Decay Knob:: */}
            <div className="knob">
              <small className="knobText">Decay</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH2DecayHandler}
                min={0}
                max={0.5}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH2Decay}
              />
            </div>
            {/* Release Knob:: */}
            <div className="knob">
              <small className="knobText">Release</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH2ReleaseHandler}
                min={0.0}
                max={0.5}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH2Release}
              />
            </div>

            {/* Harmonicity Knob:: */}
            <div className="knob">
              <small className="knobText">Harmonicity</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH2HarmonicityHandler}
                min={0}
                max={6}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH2Harmonicity}
              />
            </div>
          </div>
        ) : null}

        {this.props.knobs === "osc" ? (
          <div>
            {/* Volume  Knob:: */}

            <div className="knob">
              <small className="knobText">Volume</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH2VolumeHandler}
                min={-25}
                max={0}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH2Volume}
              />
            </div>

            {/* Pan Knob::*/}

            <div className="knob">
              <small className="knobText">Pan</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH2PanHandler}
                min={-1}
                max={1}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH2Pan}
              />
            </div>

            {/* Frequency Knob::*/}

            <div className="knob">
              <small className="knobText">Frequency</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH2FrequencyHandler}
                min={0}
                max={0.5}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH2Frequency}
              />
            </div>

            {/* Resonance Knob::*/}

            <div className="knob">
              <small className="knobText">Resonance</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH2ResonanceHandler}
                min={1000}
                max={5000}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH2Resonance}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Hihat2;
