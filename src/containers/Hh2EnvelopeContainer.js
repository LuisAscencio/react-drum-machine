import React from "react";
import Hihat2 from "../components/Hihat2";

const Hihat2EnvelopeContainer = props => {
  return (
    <div className="hH2Card">
      <div className="column">
        <div className="title">
          <small className="title">AmpEnv</small>
        </div>
        <Hihat2
          knobs="envelope"
          hH2Attack={props.hH2Attack}
          hH2AttackHandler={props.hH2AttackHandler}
          ///
          hH2Decay={props.hH2Decay}
          hH2DecayHandler={props.hH2DecayHandler}
          ///
          hH2Release={props.hH2Release}
          hH2ReleaseHandler={props.hH2ReleaseHandler}
          ///
          hH2Harmonicity={props.hH2Harmonicity}
          hH2HarmonicityHandler={props.hH2HarmonicityHandler}
          ///
          // hH2Handler={props.hH2Handler}
        />
      </div>
    </div>
  );
};

export default Hihat2EnvelopeContainer;
