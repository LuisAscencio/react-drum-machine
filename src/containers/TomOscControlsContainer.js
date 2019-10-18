import React from "react";
import Tom from "../components/Tom";

const TomOscControlsContainer = props => {
  return (
    <div className="tomCard">
      <div className="column">
        <div className="backWhite">
          <small className="titleWhite">Oscillator</small>
        </div>
        <Tom
          knobs="osc"
          tomPitchDecay={props.tomPitchDecay}
          tomPitchDecayHandler={props.tomPitchDecayHandler}
          tomOscTypeHandler={props.tomOscTypeHandler}
          tomNote={props.tomNote}
          tomNoteHandler={props.tomNoteHandler}
          tomVolume={props.tomVolume}
          tomVolumeHandler={props.tomVolumeHandler}
          tomPan={props.tomPan}
          tomPanHandler={props.tomPanHandler}
        />
      </div>
    </div>
  );
};

export default TomOscControlsContainer;
