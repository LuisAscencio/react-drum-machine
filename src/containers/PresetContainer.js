import React, { useState, useEffect } from "react";
import Firebase from "../Firebase";

function usePresets() {
  const [times, setPresets] = useState([]);
  useEffect(() => {
    Firebase.firestore()
      .collection("preset")
      .onSnapshot(snapShot => {
        const newPresets = snapShot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPresets(newPresets);
      });
  }, []);
  return times;
}

export default function PresetContainer(props) {
  const presets = usePresets();

  return (
    <div>
      <div>
        <form>
          <button
            className="seqReset"
            type="button"
            style={{
              backgroundColor: "#CBCBCB",
              borderRadius: "3px",

              padding: "5px 5px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "14px",
              margin: "4px 8px",

              cursor: "pointer",
              outline: 0
            }}
            onClick={e => {
              props.savePreset(e);
            }}
          >
            Save
          </button>
          <input
            onChange={props.inputChangeHandler}
            style={{ borderRadius: "7px" }}
            type="text"
            name="preset"
            placeholder="Preset name "
            value={props.presetName}
          ></input>
        </form>
      </div>
      <div>
        <form>
          <button
            className="seqReset"
            // onClick={this.triggerChildReset}
            type="button"
            style={{
              backgroundColor: "#CBCBCB",
              borderRadius: "3px",
              // border: "none",
              // color: "black",
              padding: "5px 5px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "14px",
              margin: "4px 8px",

              cursor: "pointer",
              outline: 0
            }}
            onClick={props.loadPreset}
          >
            Load
          </button>
          <select id="select" className="custom-select">
            {presets.map(preset => (
              <option key={preset.id} value={preset.id}>
                {preset.presetName}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
}
