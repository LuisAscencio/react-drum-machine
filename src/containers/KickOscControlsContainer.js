import React from "react";
import Kick from "../components/Kick";

const KickOscControlsContainer = props => {
  return (
    <div className="kickCard">
      <div className="column">
        <div className="title">
          <small className="title">Oscillator</small>
        </div>
        <Kick
          knobs="osc"
          kickPitchDecay={props.kickPitchDecay}
          kickPitchDecayHandler={props.kickPitchDecayHandler}
          kickOscTypeHandler={props.kickOscTypeHandler}
          kickNote={props.kickNote}
          kickNoteHandler={props.kickNoteHandler}
        />
      </div>
    </div>
  );
};

export default KickOscControlsContainer;
