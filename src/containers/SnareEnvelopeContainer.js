import React from "react";
import Snare from "../components/Snare";

const SnareEnvelopeContainer = props => {
  return (
    <div className="snareCard">
      <div className="column">
        <div className="title">
          <small className="title">AmpEnv</small>
        </div>
        <Snare
          knobs="envelope"
          snareAttack={props.snareAttack}
          snareAttackHandler={props.snareAttackHandler}
          ///
          snareDecay={props.snareDecay}
          snareDecayHandler={props.snareDecayHandler}
          ///
          snareSustain={props.snareSustain}
          snareSustainHandler={props.snareSustainHandler}
          ///
          // snareHandler={props.snareHandler}
        />
      </div>
    </div>
  );
};

export default SnareEnvelopeContainer;
