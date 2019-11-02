import React from "react";
import Kick from "../components/Kick";

const KickOscControlsContainer = props => {
  return (
    <div className="kickCard">
      <div className="column">
        <div className="backWhite">
          <small className="titleWhite">Oscillator</small>
        </div>
        <Kick
          knobs="osc"
          kickPitchDecay={props.kickPitchDecay}
          kickPitchDecayHandler={props.kickPitchDecayHandler}
          kickOscTypeHandler={props.kickOscTypeHandler}
          KickOscType={props.KickOscType}
          kickNote={props.kickNote}
          kickNoteHandler={props.kickNoteHandler}
          kickVolume={props.kickVolume}
          kickVolumeHandler={props.kickVolumeHandler}
        />
      </div>
    </div>
  );
};

export default KickOscControlsContainer;
