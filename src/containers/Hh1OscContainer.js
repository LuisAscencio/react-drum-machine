import React from "react";
import Hihat1 from "../components/Hihat1";

const Hh1OscContainer = props => {
  return (
    <div className="hH1Card">
      <div className="column">
        <div className="title">
          <small className="title">Oscillator</small>
        </div>
        <Hihat1
          knobs="osc"
          hH1Pan={props.hH1Pan}
          hH1PanHandler={props.hH1PanHandler}
          hH1Volume={props.hH1Volume}
          hH1VolumeHandler={props.hH1VolumeHandler}
          hH1Delay={props.hH1Delay}
          hH1DelayHandler={props.hH1DelayHandler}
          hH1Resonance={props.hH1Resonance}
          hH1ResonanceHandler={props.hH1ResonanceHandler}
        />
      </div>
    </div>
  );
};

export default Hh1OscContainer;
