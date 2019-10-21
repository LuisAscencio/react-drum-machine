import React from "react";
import Tom from "../components/Tom";

const TomEnvelopeContainer = props => {
  return (
    <div className="tomCard">
      <div className="column">
        <div className="backWhite">
          <small className="titleWhite">AmpEnv</small>
        </div>
        <Tom
          knobs="envelope"
          tomAttack={props.tomAttack}
          tomAttackHandler={props.tomAttackHandler}
          ///
          tomDecay={props.tomDecay}
          tomDecayHandler={props.tomDecayHandler}
          ///
          tomSustain={props.tomSustain}
          tomSustainHandler={props.tomSustainHandler}
          ///
          tomRelease={props.tomRelease}
          tomReleaseHandler={props.tomReleaseHandler}
          ///
          // tomHandler={props.tomHandler}
        />
      </div>
    </div>
  );
};

export default TomEnvelopeContainer;
