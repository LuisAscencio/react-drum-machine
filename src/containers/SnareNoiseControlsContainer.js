import React from "react";
import Snare from "../components/Snare";

const SnareNoiseControlsContainer = props => {
  return (
    <div className="snareCard">
      <div className="column">
        <div className="title">
          <small className="title">Noise</small>
        </div>
        <Snare
          knobs="noise"
          snarePan={props.snarePan}
          snarePanHandler={props.snarePanHandler}
          snareNoiseTypeHandler={props.snareNoiseTypeHandler}
          snareVolume={props.snareVolume}
          snareVolHandler={props.snareVolHandler}
        />
      </div>
    </div>
  );
};

export default SnareNoiseControlsContainer;
