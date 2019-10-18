import React from "react";
import Hihat2 from "../components/Hihat2";

const Hh2OscContainer = props => {
  return (
    <div className="hH2Card">
      <div className="column">
        <div className="title">
          <small className="title">Oscillator</small>
        </div>
        <Hihat2
          knobs="osc"
          hH2Pan={props.hH2Pan}
          hH2PanHandler={props.hH2PanHandler}
          hH2Volume={props.hH2Volume}
          hH2VolumeHandler={props.hH2VolumeHandler}
          hH2Frequency={props.hH2Frequency}
          hH2FrequencyHandler={props.hH2FrequencyHandler}
          hH2Resonance={props.hH2Resonance}
          hH2ResonanceHandler={props.hH2ResonanceHandler}
        />
      </div>
    </div>
  );
};

export default Hh2OscContainer;
