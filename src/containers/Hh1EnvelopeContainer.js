import React from "react";
import Hihat1 from "../components/Hihat1";

const Hihat1EnvelopeContainer = props => {
  return (
    <div className="hH1Card">
      <div className="column">
        <div className="title">
          <small className="title">AmpEnv</small>
        </div>
        <Hihat1
          knobs="envelope"
          hH1Attack={props.hH1Attack}
          hH1AttackHandler={props.hH1AttackHandler}
          ///
          hH1Decay={props.hH1Decay}
          hH1DecayHandler={props.hH1DecayHandler}
          ///
          hH1Release={props.hH1Release}
          hH1ReleaseHandler={props.hH1ReleaseHandler}
          ///
          hH1Harmonicity={props.hH1Harmonicity}
          hH1HarmonicityHandler={props.hH1HarmonicityHandler}
          ///
          hH1Handler={props.hH1Handler}
        />
      </div>
    </div>
  );
};

export default Hihat1EnvelopeContainer;
