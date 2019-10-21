import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class Hihat1 extends React.Component {
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
                onChange={this.props.hH1AttackHandler}
                min={0.0}
                max={0.09}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH1Attack}
              />
            </div>

            {/* Decay Knob:: */}
            <div className="knob">
              <small className="knobText">Decay</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH1DecayHandler}
                min={0}
                max={0.5}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH1Decay}
              />
            </div>
            {/* Release Knob:: */}
            <div className="knob">
              <small className="knobText">Release</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH1ReleaseHandler}
                min={0.0}
                max={0.5}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH1Release}
              />
            </div>

            {/* Harmonicity Knob:: */}
            <div className="knob">
              <small className="knobText">Harmonicity</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH1HarmonicityHandler}
                min={0}
                max={6}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH1Harmonicity}
              />
            </div>
          </div>
        ) : null}

        {this.props.knobs === "osc" ? (
          <div>
            {/* Volume Knob:: */}

            <div className="knob">
              <small className="knobText">Volume</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH1VolumeHandler}
                min={-25}
                max={0}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH1Volume}
              />
            </div>

            {/* Pan Knob::*/}

            <div className="knob">
              <small className="knobText">Pan</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH1PanHandler}
                min={-1}
                max={1}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH1Pan}
              />
            </div>

            {/* Frequency Knob::*/}

            <div className="knob">
              <small className="knobText">Delay</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH1DelayHandler}
                min={0}
                max={0.5}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH1Delay}
              />
            </div>

            {/* Resonance Knob::*/}

            <div className="knob">
              <small className="knobText">Resonance</small>
              <Knob
                skin={skins.s16}
                unlockDistance={30}
                onChange={this.props.hH1ResonanceHandler}
                min={1000}
                max={3000}
                clampMax={180}
                rotateDegrees={270}
                value={this.props.hH1Resonance}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Hihat1;
