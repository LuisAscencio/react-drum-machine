import React from "react";
import Kick from "../components/Kick";

const KickEnvelopeContainer = props => {
  return (
    <div className="kickCard">
      <div className="column">
        <div className="title">
          <small className="title">Envelope</small>
        </div>
        <Kick
          knobs="envelope"
          kickAttack={props.kickAttack}
          kickAttackHandler={props.kickAttackHandler}
          ///
          kickDecay={props.kickDecay}
          kickDecayHandler={props.kickDecayHandler}
          ///
          kickSustain={props.kickSustain}
          kickSustainHandler={props.kickSustainHandler}
          ///
          kickRelease={props.kickRelease}
          kickReleaseHandler={props.kickReleaseHandler}
          ///
          kickHandler={props.kickHandler}
        />
      </div>
    </div>
  );
};

export default KickEnvelopeContainer;
